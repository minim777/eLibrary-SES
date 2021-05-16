const express = require('express');
const usermenuController = require('../../controllers/usermenu/usermenuController');
const router = express.Router();
const { ensureAuthenticated } =  require('../../config/auth');

router.get('/usermenu', ensureAuthenticated, usermenuController.menu_home);

router.get('/usermenu/logout', usermenuController.usermenulogout);

router.get('/usermenu/book/:id', usermenuController.singlebook_get);

router.get('/usermenu/browseBooks', usermenuController.browse_books);
 
module.exports = router;
