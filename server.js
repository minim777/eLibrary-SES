const express = require('express');
const http = require('http');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const router = express.Router();

//server init
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
  
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'landingpagePlaceholder.html';
            break;
        case '/login':
            path += 'login.html';
            break;
        case '/registration':
            path += 'registration.html';
            break;
        case '/borrow':
            path += 'bookdisp.html';
            break;
    }
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write(data);
        res.end
      }
    });
  });
  
  server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
  });