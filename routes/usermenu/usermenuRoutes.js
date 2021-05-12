const express = require('express');
const usermenuController = require('../../controllers/usermenu/usermenuController');
const router = express.Router();

router.get('/usermenu', usermenuController.menu_home);

router.get('/usermenu/book/:id', usermenuController.singlebook_getU);


module.exports = router;
