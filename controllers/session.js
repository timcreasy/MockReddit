module.exports.new = (req, res) => {
  res.render('login');
};

module.exports.create = (req, res) => {
  console.log(req.body);
  res.redirect('/');
};