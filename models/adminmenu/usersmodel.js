var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
   userID: {
       type: String,
       required: true
   },
   Name:{
     type: String,
     required: true
   },
   Email:{
     type: String,
     required: true
   },
   Password:{
     type: String,
     required: true
   },
   Type:{
     type: String,
     required: true
   },  
   Registration_Date:{
     type: Date, 
     required: true
   }
});

// let User =
module.exports = mongoose.model('User', UserSchema );
