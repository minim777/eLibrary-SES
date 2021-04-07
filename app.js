// Importing important modules
const express = require('express'); 
const mongoose = require('mongoose'); 
const ejs = require('ejs'); 
const app = express(); 
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Setting the view engine to ejs
app.set('view engine', 'ejs'); 
app.use(express.static('public')); 


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
  console.log("Connected successfully to db");

  app.listen(4000, function() {
    console.log('Server is running !');
    setTimeout( () => {
        console.log(mongoose.connection.readyState); // prints 1
      }, 2000);
}); 

});

// Selecting the database and the right collection, taking all of the data in it and putting it into a list
app.get('/', (req,res) => {

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




