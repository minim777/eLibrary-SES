const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const port = 4000;

// Load view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Creating a new MongoClient
const client = new MongoClient('mongodb+srv://leo:calligraphy004@ses1a.kdj8l.mongodb.net/Books?retryWrites=true&w=majority');

app.get('/', function(req, res){
    res.render('returnBook', {
        title: "eLMS: returnBook"
    });
});

// Start server
app.listen(port, function() {
    console.log('Server started on port ' + port);
    setTimeout( () => {
        console.log(mongoose.connection.readyState);
    }, 2000);
});