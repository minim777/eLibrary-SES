const express = require('express');
const usermenuController = require('../../controllers/usermenu/usermenuController');
const router = express.Router();

router.get('/usermenu', usermenuController.menu_home);

router.get('/adminmenu/books', adminmenuController.view_books);


module.exports = router;
