// dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


const app = express(); // Initialise app 


// Get Jquery working
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("");
const jquery = require('jquery')(dom.window);
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));

const adminmenuRoutes = require('./routes/adminmenu/adminmenuRoutes'); // routes
const loginandregoRoutes = require('./routes/loginandregistration/loginandregoRoutes'); // routes
const usermenuRoutes =  require('./routes/usermenu/usermenuRoutes'); // routes

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
app.use(express.static(path.join(__dirname, '/public/')));

//parse application/json
app.use(express.json());
//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



// call routes
app.use(loginandregoRoutes);
app.use(adminmenuRoutes);
app.use(usermenuRoutes);

// Start Server
const port = process.env.port || 3000;
app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Server started at http://localhost:${port}`)
});
