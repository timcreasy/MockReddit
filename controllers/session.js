const passport = require('passport');

module.exports.new = (req, res) => {
  res.render('login');
};

module.exports.create = passport.authenticate('local', { successRedirect: '/',
                                                          failureRedirect: '/login' });

module.exports.destroy = (req, res) => {
  req.logout();
  res.redirect('/login');
};