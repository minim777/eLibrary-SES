const express = require('express'); 
//const mongoose = require('mongoose'); 
const ejs = require('ejs'); 
const app = express(); 
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

app.set('view engine', 'ejs'); 

// connecting to mongodb database: Books
//mongoose.connect('mongodb+srv://leo:calligraphy004@ses1a.kdj8l.mongodb.net/Books?retryWrites=true&w=majority', { useNewUrlParser: true }, { useUnifiedTopology: true }); 



// Connection URL
const url = 'mongodb+srv://leo:calligraphy004@ses1a.kdj8l.mongodb.net/Books?retryWrites=true&w=majority';

// Database Name
const dbName = 'eLMS';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to db");

  app.listen(4000, function() {
    console.log('Server is running !');
    //setTimeout( () => {
        //console.log(mongoose.connection.readyState); // prints 1
      //}, 2000);
}); 

});

// creating a book schema
const bookSchema = {
    title: String, 
    author: String, 
    category: String, 
    type: String
}

// creating data model
//const Book = mongoose.model('Book', bookSchema); 

app.get('/', (req,res) => {
    //Book.find({}, function(err, Books) {
        //res.render('BrowseBooks', {
            //BooksList: Books
            //user: 'leo'
        //})
    //})

    const db = client.db(dbName);
    const collection = db.collection('Books');
    // Find some documents
    collection.find({}).toArray(function(err, books_list) {
        assert.equal(err, null);
        console.log("Found the following books");
        console.log(books_list)
        res.render('BrowseBooks', {Books: books_list})
     });











})




