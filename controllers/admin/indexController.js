// const passport = require('passport');


// GET - Show admin sign in page
module.exports.login_get = (req, res, next) => {
    res.render('login');
  };