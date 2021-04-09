// Importing important modules
const express = require('express'); 
const mongoose = require('mongoose'); 
const ejs = require('ejs'); 
const app = express(); 
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const port = 4000; 
const router = express.Router();

// Setting the view engine to ejs
app.set('view engine', 'ejs'); 
app.use(express.static('public')); 


// Connection URL
const url = 'mongodb+srv://leo:calligraphy004@ses1a.kdj8l.mongodb.net/eLMS?retryWrites=true&w=majority';

// Database Name
const dbName = 'eLMS';

// Create a new MongoClient
const client = new MongoClient(url);


//This is to make css work for the views i think?! idk this app is so fragile nobody touch anything!
app.use('/views',express.static(__dirname +'/views'));

//These are the navigation routes to change between pages
router.get('/',function(req,res){
  res.render('landingpagePlaceholder');
});

router.get('/login',function(req,res){
  res.render('Login');
});

router.get('/registration',function(req,res){
  res.render('Registration');
});

// Selecting the database and the right collection, taking all of the data in it and putting it into a list
router.get('/books', function(req,res){
  res.render('BrowseBooks');
});


//I dont even know what this shit does
app.use('/', router);
app.listen(process.env.port || 3000);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/books', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('Books');
  // Find some documents
  collection.find({}).toArray(function(err, books_list) {
      assert.equal(err, null);
      console.log("Found the following books");
      console.log(books_list);
      const Books = books_list;
      res.render('BrowseBooks', {Books: books_list})
   });
})
app.post('/registration', async (req, res) => {
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

app.post("/login", async (req, res) => {
  try {
    var dbo = db.db("eLMS");
    dbo.collection("users").findOne({userId: req.body.userId}, function(err, result) {
      console.log(result);
      console.log('Login success');
      });
  } catch(error) {

  }

  res.redirect('../books');
});


//These are the navigation routes to change between pages





