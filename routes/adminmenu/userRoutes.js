const express = require('express');
const userController = require('../../controllers/adminmenu/userController');
const router = express.Router();

// ViewUsers Route
router.get('/viewusers', userController.view_users);

// view a single user's info Route
router.get('/user/:id', userController.singleuser_get);

// delete a single user Route 
router.delete('/user/:id', userController.singleuser_delete);


module.exports = router;
