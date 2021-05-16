// dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

const adminmenuRoutes = require('./routes/adminmenu/adminmenuRoutes'); // routes
const loginandregoRoutes = require('./routes/loginandregistration/loginandregoRoutes'); // routes
const usermenuRoutes =  require('./routes/usermenu/usermenuRoutes'); // routes


const app = express(); // Initialise app 

// passport config 
require('./config/passportconfig')(passport);

// Get Jquery working
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("");
const jquery = require('jquery')(dom.window);
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));


// Connect to database
const mongo = "mongodb+srv://deepak:SES1Apwd%2321@ses1a.kdj8l.mongodb.net/eLMS?retryWrites=true&w=majority"
mongoose.connect(mongo,{
  useNewUrlParser: true,
  useUnifiedTopology: true
 });
mongoose.set('useCreateIndex', true)

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

// session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());



// Load/Register View Engine
app.set('/views/', path.join(__dirname, '/views/'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public/')));

//parse application/json
app.use(express.json());
//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true  }));


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
