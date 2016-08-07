
var today = new Date().toString();

module.exports = {

    userAuth : function (req, res,  next) {

        console.log('User has been authenticated hey !' + today);
        next();
    },
    detectUser: function (req, res, next) {
        console.log('User was detected on  ' + today);
        next();
    }
};