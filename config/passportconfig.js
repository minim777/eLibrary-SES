const LocalStrategy = require('passport-local').Strategy; 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

// import model
const User = require('../models/usersmodel'); // import models

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ 
            usernameField: "Email", 
            passwordField: "Password"
        },
        function(Email, Password, done){
            // Match user
            User.findOne({ Email: Email })
                .then(user => {
                    if(!user) {
                        return done(null, false, { message: "The email is not registered"});
                    }

                    // Match password 
                    bcrypt.compare(Password, user.Password, (err, isMatch) => {
                        if(err) throw err; 
                        if(isMatch){
                            return done(null, user); 

                        } 
                        else {
                            return done(null, false, {message: "Password is incorrect"});
                        }
                    })
                
                })
                .catch(err => console.log(err));
        })
        
    );

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
      
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
    });
}