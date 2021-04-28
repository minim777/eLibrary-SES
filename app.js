const express = require('express'); 
const path = require('path'); 
const mongoose = require('mongoose'); 
const ejs = require('ejs'); 
const port = process.env.port || 3000; 

mongoose.connect('mongodb+srv://Huzaifa:Disable321%23%24@ses1a.kdj8l.mongodb.net/eLMS?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

var db = mongoose.connection; 
db.on('open', function() {
    console.log("Connected to MongoDB");
  }); 

db.on('error', function(err) {
    console.log(err);
  });


// Init App
const app = express();  

// Load View engine
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

// Home Route
app.get('/', function(req, res){
    res.render('borrowBook', {
        title: "eLMS: Borrow Books"
    });
});

// Start Server
app.listen(port, err => {
    if (err) {
        return console.log("Error", err);
    } 
    console.log('Server started at http://localhost:${port}')
});