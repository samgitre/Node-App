var express = require('express');
var app = express();
var path = require('path');
var setPort = process.env.PORT || 4000;
var middleware = require('../middleware');




app.get('/', middleware.userAuth, function (req, res) {
    res.render('index.html');
});


app.get('/about', middleware.detectUser, function (req, res) {
    res.send('Hello about');
});


app.use(express.static(path.resolve(__dirname + '/public')));
app.set('view engine', 'html');
app.listen(setPort);
console.log('server running at : ' + setPort);