const express = require('express'); 
const mongoose = require('mongoose'); 
const ejs = require('ejs'); 
const app = express();
const router = express.Router(); 
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser = require("body-parser"); 
const { Router } = require('express');
const port = 2000;

app.set('view engine', 'ejs'); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

// Connection URL
const url = 'mongodb+srv://leo:calligraphy004@ses1a.kdj8l.mongodb.net/Books?retryWrites=true&w=majority';

// Database Name
const dbName = 'eLMS';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server --> Make sure that the Database 
// Then set up the actual server.
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to eLMS Database");

  app.listen(port, function() {
    console.log('Server is running at localhost:' + port + '!');
    // setTimeout( () => {
    //     console.log(mongoose.connection.readyState); // prints 1
    //   }, 2000);
}); 

});


//creating a book schema
var schema = new mongoose.Schema({
    title: String, 
    author: String, 
    category: String, 
    type: String,
    borrowed: Boolean
}); 



//creating data model
const Book = mongoose.model('Book', schema);

app.get('/', (req,res, next) => {

    const db = client.db(dbName);
    const collection = db.collection('Books');
    collection.find({}).toArray(function(err, books_list) {
        assert.equal(err, null);
        console.log("Found the following books");
        console.log(books_list)
        res.render('AddBook', {Books: books_list})
     });
})

app.post('/', function(req,res,next) {
    var newBook = new Book ( {
        title: req.body.title , 
        author: req.body.author ,
        category: req.body.category, 
        type: req.body.type,
        borrowed: false 
    });
    
    const db = client.db(dbName);
    const collection = db.collection('Books');
    collection.insertOne(newBook, function(err, result) {
        assert.equal(null, err); 
        console.log('Book Inserted')
    })

    res.redirect('/'); 
})



