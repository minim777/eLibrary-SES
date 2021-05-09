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

const book_page = function(req, res){                       // work in progress
    Book.findOne({}, function(err, book){
        if(err){
            console.log(err);
        }
        else {
            res.render('usermenu/borrow', {
            title: "Borrow a book",
            book: book
            });
        }
    });
}
// const borrow_one = function(req, res){
//     if(err){
//         console.log(err);
//     }
//     Book.findById(req.params.id, function(err, book){
//         res.render('usermenu/borrow', {
//            title: "Borrow a Book",
//            book: book
//          });
//        });
// }


module.exports = {
    menu_home,
    book_page

}