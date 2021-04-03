// Import express
var express = require('express');
var app = express();

// Get MongoClient
var MongoClient = require('mongodb').MongoClient;

// db url, collection name and db name
const dburl = 'mongodb+srv://leo:calligraphy004@ses1a.kdj8l.mongodb.net/test';
const dbname = 'eLMS';
const collname = 'Users';

app.get('/getUsers', function(req, res) {
    MongoClient.connect(dburl, function(err, client) {
        if (!err) {
            const db = client.db(dbname);
            const collection = db.collection(collname);

            collection.find({}).toArray(function(err, todos) {
                if (!err) {
                    console.log(todos);
                }
            });
        }
    });
});