var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var BookSchema = new Schema({
   Title: {
       type: String, 
       required: true
   }, 
   Author: {
       type: String, 
       required: true
   }, 
   Type: {
       type: String, 
       required: true
   }, 
   ForNF: {
       type: String, 
       required: true
   },
   Genre: {
       type: String, 
       required: true
   }, 
   Blurb: {
       type: String, 
       maxlength: 1000,
       required: true
   }, 
   availableCopies: {
        type: Number, 
        required: true 
   } 
});


module.exports = mongoose.model('Book', BookSchema );