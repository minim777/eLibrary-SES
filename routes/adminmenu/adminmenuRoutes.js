const express = require('express');
const adminmenuController = require('../../controllers/adminmenu/adminmenuController');
const router = express.Router();

// Home Route 
router.get('/', adminmenuController.home_page);

// ViewUsers Route
router.get('/users', adminmenuController.view_users);

// render add user form route
router.get('/user/add', adminmenuController.adduser_get);

// add a user to db route
router.post('/user/add', adminmenuController.adduser_post);

// view a single user's info Route
router.get('/user/:id', adminmenuController.singleuser_get);

// delete a single user Route 
router.delete('/user/:id', adminmenuController.singleuser_delete);

// ViewBooks Route
router.get('/books', adminmenuController.view_books);

// render add book form route 
router.get('/book/add', adminmenuController.addbook_get);

// add book to db route 
router.post('/book/add', adminmenuController.addbook_post);

// view a single book's info Route 
router.get('/book/:id', adminmenuController.singlebook_get);

module.exports = router;
