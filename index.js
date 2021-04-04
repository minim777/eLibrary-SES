const express = require('express');
const http = require('http');
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

router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/views/login.html'));
});

router.get('/registration',function(req,res){
  res.sendFile(path.join(__dirname+'/views/registration.html'));
});

//I dont even know what this shit does
app.use('/', router);
app.listen(process.env.port || 3000);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connecting to our database
mongoose.connect('mongodb+srv://leo:calligraphy004@ses1a.kdj8l.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

//Schemas
var userSchema = new mongoose.Schema({
  userId: String,
  password: String,
  email: String
});

var user = mongoose.model('Users', userSchema);

//APIs
app.post("/register", (req, res) => {
  var myData = new user(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});