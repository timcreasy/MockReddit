const Story = require('../models/story');

module.exports.index = (req, res) => {
  Story
    .find()
    .sort({upvotes: -1})
    .then((stories) => {
      res.render('home', {stories});
    });
};