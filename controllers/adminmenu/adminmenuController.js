const User = require('../../models/adminmenu/usersmodel'); // import models
const Book = require('../../models/adminmenu/booksmodel'); // import models

const home_page = function(req, res){
    res.render('adminmenu/adminmenu', {
        title: "eLMS: Admin Menu"
    });
}

const view_users = function(req, res){
    User.find({}, function(err, users){
        if(err){
          console.log(err);
        }
        else {
            res.render('adminmenu/viewusers', {
                title: "View Users List",
                userlist: users
            });
        }
    });
}

const adduser_get = function(req, res){
    res.render('adminmenu/adduser', {
        title: "Manual User Registration"
    });
}

const adduser_post = function(req, res){
    let user = new User({
        userID: req.body.userID,
        Name: req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password,
        Type: req.body.Type, 
        Registration_Date: req.body.Registration_Date
    });

    user.save(function(err){
        if(err){
            console.log(err);
            return;
        }
        else {
            res.redirect('/users');
        }
    });
}


const singleuser_get = function(req, res){
    User.findById(req.params.id, function(err, user){
       res.render('adminmenu/singleuser', {
          title: "Single User",
          user: user
        });
      });
}

const singleuser_delete = function(req, res){
    let query = {_id:req.params.id}

    User.deleteOne(query, function(err){
        if(err){
            console.log(err);
        }
        res.send('Success'); 
    });
}

const view_books = function(req, res){
    Book.find({}, function(err, books){
        if(err){
          console.log(err);
        }
        else {
            res.render('adminmenu/viewbooks', {
                title: "View Book List",
                booklist: books
            });
        }
    });
}

const addbook_get = function(req, res) {
    res.render('adminmenu/addbook', {
        title: "Add a Book to eLibrary"
    });
}

const addbook_post = function(req, res){
    let book = new Book({
        bookcopy_ID: req.body.bookcopy_ID,
        Title: req.body.Title,
        Author: req.body.Author,
        Type: req.body.Type,
        ForNF: req.body.ForNF, 
        Genre: req.body.Genre,
        Blurb: req.body.Blurb, 
        availableCopies: req.body.availableCopies
    });

    book.save(function(err){
        if(err){
            console.log(err);
            return;
        }
        else {
            res.redirect('/books');
        }
    });
}

const singlebook_get = function(req, res){
    Book.findById(req.params.id, function(err, book){
        res.render('adminmenu/singlebook', {
           title: "Single Book",
           book: book
         });
       });
}

const singlebook_delete = function(req, res){
    let query = {_id:req.params.id}

    Book.deleteOne(query, function(err){
        if(err){
            console.log(err);
        }
        res.send('Success'); 
    });
}


module.exports = {
    home_page,
    view_users,
    adduser_get,
    adduser_post,
    singleuser_get,
    singleuser_delete, 
    view_books, 
    addbook_get, 
    addbook_post, 
    singlebook_get, 
    singlebook_delete
}
