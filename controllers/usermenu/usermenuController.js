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

const singlebook_getU = function(req, res){
    Book.findById(req.params.id, function(err, book){
        res.render('usermenu/singlebookU', {
           title: "Single Book",
           book: book
         });
       });
}

const return_books = function(req, res){
    Book.find({}, function(err, books){
        if(err){
          console.log(err);
        }
        else {
            res.render('usermenu/returnBooks', {
                title: "View Book List",
                booklist: books
            });
        }
    });
}

const user_profile = function(req, res){
    Book.find({}, function(err, books){
        if(err){
          console.log(err);
        }
        else {
            res.render('usermenu/userProfile', {
                title: "View Book List",
                booklist: books
            });
        }
    });
}

module.exports = {
    menu_home,
    usermenulogout,
    singlebook_getU,
    return_books,
    user_profile
}