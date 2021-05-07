const User = require('../../models/usersmodel'); // import models
const Book = require('../../models/booksmodel'); // import models

const menu_home = function(req, res){
    res.render('usermenu/usermenu', {
        title: "eLMS: User Menu"
    });
}


module.exports = {
    menu_home
}