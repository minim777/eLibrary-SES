const express = require('express');
const userController = require('../../controllers/adminmenu/userController');
const router = express.Router();

// ViewUsers Route
router.get('/viewusers', userController.view_users);

// SingleUsers Route
router.get('/viewusers/:id', userController.single_user);



module.exports = router;
