const express = require('express'); 
const mongoose = require('mongoose'); 
const ejs = require('ejs'); 
const app = express(); 

app.set('view engine', 'ejs'); 

// connecting to mongodb database: Books
mongoose.connect('mongodb+srv://leo:calligraphy004@ses1a.kdj8l.mongodb.net/Books?retryWrites=true&w=majority', { useNewUrlParser: true }, { useUnifiedTopology: true });



// creating a book schema
const bookSchema = {
    title: String, 
    author: String, 
    category: String, 
    type: String
}

// creating data model
const Book = mongoose.model('Book', bookSchema); 

app.get('/', (req,res) => {
    Book.find({}, function(err, Books) {
        res.render('BrowseBooks', {
            BooksList: Books
        })
    })
})


app.listen(4000, function() {
    console.log('Server is running !');
}); 

