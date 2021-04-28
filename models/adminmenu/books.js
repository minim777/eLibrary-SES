const mongoose = require ('mongoose'); 

//creating a book schema
var BookSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    author: {
        type: String, 
        required: true
    },
    category: {
        type: String,
        required: true
    }, 
    type: {
        type: String,
        required: true
    }, 
    borrowed: {
        type: Boolean, 
    } 
}); 



//creating data model
const Book = mongoose.model('Book', BookSchema); 
module.exports = Book; 