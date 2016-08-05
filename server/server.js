var express = require('express');
var app = express();
var setPort = 5000;


var today = new Date().toString();

var middleware = {

    userAuth : function (req, res,  next) {

        console.log('User has been authenticated hey !' + today);
        next();
    },
    detectUser: function (req, res, next) {
        console.log('User was detected on  ' + today);
        next();
    }
};



app.get('/', middleware.userAuth, function (req, res) {
    res.send('index home');
});

app.get('/about', middleware.detectUser, function (req, res) {
    res.send('Hello about');

});

app.use(express.static(__dirname + '/public'));

app.listen(setPort);
console.log('server running');