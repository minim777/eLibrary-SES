var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
   _id: { 
       type: mongoose.Schema.Types.ObjectId
   },
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
       maxlength: 3000,
       required: true
   }, 
   availableCopies: {
        type: Number, 
        required: true 
   } 
});


module.exports = mongoose.model('Book', BookSchema );
