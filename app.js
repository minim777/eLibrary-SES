const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const userRoutes = require('./routes/adminmenu/userRoutes');
const app = express(); // Initialise app
const port = process.env.port || 3000;

// Connect to database
const mongo = "mongodb+srv://deepak:mullumbimbo@2020@ses1a.kdj8l.mongodb.net/eLMS?retryWrites=true&w=majority"
mongoose.connect(mongo,{
  useNewUrlParser: true,
  useUnifiedTopology: true
 });

//Get the default connection
var db = mongoose.connection;

// check db connection
db.on('open', function() {
  console.log("Connected to MongoDB");
});

// check error for db connection
db.on('error', function(err) {
  console.log(err);
});

// Load/Register View Engine
app.set('/views/', path.join(__dirname, '/views/'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public/')))


// Home Route
app.get('/', function(req, res){
    res.render('adminmenu/adminmenu', {
        title: "eLMS: Admin Menu"
    });
});

// routes
app.use(userRoutes);

// Start Server
app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Server started at http://localhost:${port}`)
});
