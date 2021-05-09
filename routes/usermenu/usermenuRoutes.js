const express = require('express');
const usermenuController = require('../../controllers/usermenu/usermenuController');
const router = express.Router();

router.get('/usermenu', usermenuController.menu_home);

router.get('/usermenu/borrow/:id', usermenuController.book_page);     // borrow book



module.exports = router;
