const express = require('express'); 
const mongoose = require('mongoose'); 
const ejs = require('ejs'); 
const app = express(); 

app.set('view engine', 'ejs'); 

mongoose.connect('mongodb+srv://leo:calligraphy004@ses1a.kdj8l.mongodb.net/Books?retryWrites=true&w=majority'); 

app.get('/', (req,res) => {
    res.render(BrowseBooks.ejs)
})

app.listen(4000, function() {
    console.log('Server is running !');
}); 

