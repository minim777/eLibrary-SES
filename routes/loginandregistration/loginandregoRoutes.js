const express = require('express');
const loginandregoController = require('../../controllers/loginandregistration/loginandregoController');
const router = express.Router();

router.get('/', loginandregoController.login_get);

router.get('/registration', loginandregoController.rego_get);

router.post('/registration', loginandregoController.rego_post);


module.exports = router;