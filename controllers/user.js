module.exports.new = (req, res) => {
  res.render('register');
};

module.exports.create = (req, res) => {
  res.redirect('/login');
};