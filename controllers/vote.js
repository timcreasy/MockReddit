const Story = require('../models/story');

module.exports.upvote = (req, res, next) => {
    Story
      .find({ "_id": req.params.storyID })
      .then((story) => {
          Story
            .update({ "_id": req.params.storyID }, {$set: { upvotes: story[0].upvotes + 1 }})
            .then(() => {
              res.redirect('/');
            })
      })
      .catch((err) => {
        next(err);
      });

};

module.exports.downvote = (req, res, next) => {

    Story
      .find({ "_id": req.params.storyID })
      .then((story) => {
          Story
            .update({ "_id": req.params.storyID }, {$set: { upvotes: story[0].upvotes - 1 }})
            .then(() => {
              res.redirect('/');
            })
      })
      .catch((err) => {
        next(err);
      });

}