const express = require('express');
const http = require('http');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const router = express.Router();

//This is to make css work for the views i think?! idk this app is so fragile nobody touch anything!
app.use('/views',express.static(__dirname +'/views'));

//These are the navigation routes to change between pages
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/landingpagePlaceholder.html'));
});

router.get('/borrow',function(req,res){
  res.sendFile(path.join(__dirname+'/views/bookdisp.html'));
});

router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/views/login.html'));
});

router.get('/registration',function(req,res){
  res.sendFile(path.join(__dirname+'/views/registration.html'));
});

// app.use('/', router);
// app.listen(process.env.port || 3000);
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//Connecting to our database
mongoose.connect('mongodb+srv://leo:calligraphy004@ses1a.kdj8l.mongodb.net/eLMS', { useNewUrlParser: true, useUnifiedTopology: true });

//Schemas
var userSchema = new mongoose.Schema({
  userId: String,
  password: String,
  email: String
});

var user = mongoose.model('Users', userSchema);

//APIs
// app.post("/register", (req, res) => {
//   var myData = new user(req.body);
//   myData.save()
//     .then(item => {
//       res.send("item saved to database");
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });
// });
app.post('/register', async (req, res) => {
	const { userId, password, email } = req.body

	if (password.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	try {
		const response = await user.create({
			userId,
			password,
      email
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'ID already in use' })
		}
		throw error
	}
  res.redirect('../login');
})

app.post("/login", (req, res) => {
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb+srv://leo:calligraphy004@ses1a.kdj8l.mongodb.net/eLMS';
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("eLMS");
    dbo.collection("users").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log('Login success');
      db.close();
    });
  });
});
