const mongoose = require ('mongoose'); 

var schema = new mongoose.Schema({
    title: String, 
    author: String, 
    category: String, 
    type: String,
    borrowed: Boolean 
}); 

const Book = mongoose.model('Book', schema); 

module.exports = Book;