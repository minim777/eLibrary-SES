const User = require('../../models/usersmodel'); // import models
const Book = require('../../models/booksmodel'); // import models
const passport = require('passport');

const menu_home = function(req, res){
    Book.find({}, function(err, books){
        if(err){
          console.log(err);
        }
        else {
            res.render('usermenu/browseBooks', {
                title: "View Book List",
                booklist: books
            });
        }
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