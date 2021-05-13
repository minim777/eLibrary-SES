const User = require('../../models/usersmodel'); // import models
const Book = require('../../models/booksmodel'); // import models

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

const browse_books = function(req, res){
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


const singlebook_getU = function(req, res){
    Book.findById(req.params.id, function(err, book){
        res.render('usermenu/singlebookU', {
           title: "Single Book",
           book: book
         });
       });
}

module.exports = {
    menu_home,
    singlebook_getU,
    browse_books
}