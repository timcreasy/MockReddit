"use strict";

const { Router } = require('express');
const router = Router();
const Story = require('../models/story');

router.get('/', (req, res) => {
  Story
    .find()
    .sort({upvotes: -1})
    .then((stories) => {
      res.render('home', {stories});
    })
});

router.param('storyID', function (req, res, next, storyID) {
  next();
});


router.post('/upvote/:storyID', (req, res, next) => {

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

});

router.post('/downvote/:storyID', (req, res, next) => {

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

});

router.get('/new', (req, res, next) => {
  res.render('new');
  next(err);
});

router.post('/new', (req, res, next) => {
  Story
    .create(req.body)
    .then(() => {
      res.redirect('/');
    }).catch((err) => {
      next(err);
    });
});

router.get('/comments/:storyID', (req, res, next) => {
  Story
      .find({ "_id": req.params.storyID })
      .then((story) => {
        res.render('comment', { story: story[0] })
      })
      .catch((err) => {
        next(err);
      })
});

router.post('/comments/:storyID', (req, res, next) => {
  Story
    .update({ "_id": req.params.storyID }, {$push: {"comments": {author: req.body.author, comment: req.body.comment}}})
    .then((comment) => {
      let pageToRender = `/comments/${req.params.storyID}`;
      res.redirect(pageToRender);
    })
    .catch((err) => {
      next(err);
    })
});


module.exports = router;