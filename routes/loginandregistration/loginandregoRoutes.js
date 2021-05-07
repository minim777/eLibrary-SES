const express = require('express');
const loginandregoController = require('../../controllers/loginandregistration/loginandregoController');
const router = express.Router();

router.get('/', loginandregoController.elms_home);




module.exports = router;