const Story = require('../models/story');

module.exports.new = (req, res, next) => {
  res.render('new');
  next(err);
};

module.exports.create = (req, res, next) => {
  Story
    .create(req.body)
    .then(() => {
      res.redirect('/');
    }).catch((err) => {
      next(err);
    });
};