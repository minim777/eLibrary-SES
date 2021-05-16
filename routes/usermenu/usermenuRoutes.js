const express = require('express');
const usermenuController = require('../../controllers/usermenu/usermenuController');
const router = express.Router();
const { ensureAuthenticated } =  require('../../config/auth');

router.get('/usermenu', ensureAuthenticated, usermenuController.menu_home);

router.get('/usermenu/logout',  ensureAuthenticated, usermenuController.usermenulogout);

router.get('/usermenu/book/:id',  ensureAuthenticated, usermenuController.singlebook_getU);

router.get('/usermenu/returnBooks',  ensureAuthenticated, usermenuController.return_books);

router.get('/usermenu/userProfile',  ensureAuthenticated, usermenuController.user_profile);
 
module.exports = router;
