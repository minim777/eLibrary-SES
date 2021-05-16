const User = require('../../models/usersmodel'); // import models
const Book = require('../../models/booksmodel'); // import models
const passport = require('passport');


const menu_home = function(req, res){
    res.render('usermenu/usermenu', {
        title: "eLMS: User Menu"
    });
}

const usermenulogout = function(req, res){
    req.logout();
    res.redirect('/');
}


module.exports = {
    menu_home,
    usermenulogout
}