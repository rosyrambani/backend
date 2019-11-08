var express = require('express'); // imported express module
var app = express(); // created an object to create an express app

// write a callback fn to be invoked for a HTTP GET request with a path ('/')
// takes send() on the response arguemnt and returns Hello World!
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// start up server on port 3000
app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});