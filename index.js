const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use('/views',express.static(__dirname +'/views'));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/landingpagePlaceholder.html'));
});

router.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/views/login.html'));
});

router.get('/registration',function(req,res){
  res.sendFile(path.join(__dirname+'/views/registration.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);