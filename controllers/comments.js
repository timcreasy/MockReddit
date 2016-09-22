'use strict';

const Story = require('../models/story');

module.exports.new = (req, res, next) => {
  Story
      .find({ "_id": req.params.storyID })
      .then((story) => {
        res.render('comment', { story: story[0], comments: story[0].comments })
      })
      .catch((err) => {
        next(err);
      })
};

module.exports.create = (req, res, next) => {
  Story
    .update({ "_id": req.params.storyID }, {$push: {"comments": {author: req.user.email, comment: req.body.comment}}})
    .then((comment) => {
      let pageToRender = `/comments/${req.params.storyID}`;
      res.redirect(pageToRender);
    })
    .catch((err) => {
      next(err);
    })
}