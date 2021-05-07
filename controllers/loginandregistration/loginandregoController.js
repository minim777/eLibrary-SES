const User = require('../../models/usersmodel'); // import models

const login_get = function(req, res){
    res.render('loginandregistration/login', {
        title: "eLMS Login Page"
    });
}

const rego_get = function(req, res){
    res.render('loginandregistration/registration', {
        title: "eLMS Sign Up"
    });
}

const rego_post = function(req, res){

}


module.exports = {
    login_get, 
    rego_get, 
    rego_post
}
