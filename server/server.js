var express = require('express');
var app = express();
var setPort = 5000;
var middleware = require('../middleware');



app.get('/', middleware.userAuth, function (req, res) {
    res.send('index home');
});

app.get('/about', middleware.detectUser, function (req, res) {
    res.send('Hello about');

});

app.use(express.static(__dirname + '/public'));

app.listen(setPort);
console.log('server running');