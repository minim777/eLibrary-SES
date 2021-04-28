const mongoose = require ('mongoose'); 

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

module.exports = Book; 