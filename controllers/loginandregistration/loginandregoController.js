const User = require('../../models/usersmodel'); // import models
const bcrypt = require('bcrypt');
const passport = require('passport');

const login_get = function(req, res){
    res.render('loginandregistration/login', {
        title: "eLMS Login Page"
    });
}

const login_post = function(req, res, next){
    passport.authenticate('local', {
        successRedirect: '/usermenu/', 
        failureRedirect: '/'
    })(req, res, next);
}

const rego_get = function(req, res){
    res.render('loginandregistration/registration', {
        title: "eLMS Sign Up"
    });
}

const rego_post = function(req, res){
    let user = new User({
        userID: req.body.userID,
        Name: req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password,
        Type: req.body.Type
    });

    // Hash Password
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.Password, salt, function(err, hash){
            if(err) throw error;
            // set password to hashed 
            user.Password = hash;
            // save user
            user.save(function(err){
                if(err){
                    console.log(err);
                    return;
                }
                else {
                    res.redirect('/');
                }
            });

        });
    });
}


module.exports = {
    login_get,
    login_post,  
    rego_get, 
    rego_post
}
