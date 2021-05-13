const express = require('express');
const usermenuController = require('../../controllers/usermenu/usermenuController');
const router = express.Router();

router.get('/usermenu', usermenuController.menu_home);

router.get('/usermenu/book/:id', usermenuController.singlebook_getU);

router.get('/usermenu/browseBooks', usermenuController.browse_books);

router.get('/usermenu/returnBooks', usermenuController.return_books);

router.get('/usermenu/userProfile', usermenuController.user_profile);
 
module.exports = router;
