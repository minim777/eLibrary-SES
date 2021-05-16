const express = require('express');
const adminmenuController = require('../../controllers/adminmenu/adminmenuController');
const router = express.Router();

// Home Route 
router.get('/adminmenu', adminmenuController.menu_home);

// ViewUsers Route
router.get('/adminmenu/users', adminmenuController.view_users);

// render add user form route
router.get('/adminmenu/user/add', adminmenuController.adduser_get);

// add a user to db route
router.post('/adminmenu/user/add', adminmenuController.adduser_post);

// ViewBooks Route
router.get('/adminmenu/books', adminmenuController.view_books);

// render add book form route 
router.get('/adminmenu/book/add', adminmenuController.addbook_get);

// add book to db route 
router.post('/adminmenu/book/add', adminmenuController.addbook_post);

// view a single user's info Route
router.get('/adminmenu/user/:id', adminmenuController.singleuser_get);

// delete a single user Route 
router.delete('/adminmenu/user/:id', adminmenuController.singleuser_delete);

// render form to update a single user's info Route 
// router.get('/adminmenu/user/:id/update', adminmenuController.updateuser_get);

// view a single book's info Route 
router.get('/adminmenu/book/:id', adminmenuController.singlebook_get);

// delete a single book Route 
router.delete('/adminmenu/book/:id', adminmenuController.singlebook_delete);

// render form to update a single book's info Route 
router.get('/adminmenu/book/:id/update', adminmenuController.updatebook_get);

//  update a single book's info Route 
router.post('/adminmenu/book/:id/update', adminmenuController.updatebook_post);


module.exports = router;
