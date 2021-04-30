const express = require('express');
const userController = require('../../controllers/adminmenu/userController');
const router = express.Router();

// ViewUsers Route
router.get('/viewusers', userController.view_users);

// SingleUsers Route
router.get('/viewusers/:id', userController.single_user);

// Add a User Get Route 
router.get('/adduser', userController.adduser_get);


//Update user information route
router.get('/updateuserinfo', userController.updateuserinfo_get);



module.exports = router;
