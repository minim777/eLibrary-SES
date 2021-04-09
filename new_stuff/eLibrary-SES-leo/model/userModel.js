const mongoose = require ('mongoose'); 

var userSchema = new mongoose.Schema({
    userId: String,
    password: String,
    email: String
  });
  
  const user = mongoose.model('Users', userSchema);

module.exports = Book; 