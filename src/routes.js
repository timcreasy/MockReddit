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

router.post('/upvote/:storyID', (req, res) => {

    Story
      .find({ "_id": req.params.storyID })
      .then((story) => {
          Story
            .update({ "_id": req.params.storyID }, {$set: { upvotes: story[0].upvotes + 1 }})
            .then(() => {
              res.redirect('/');
            })
      });

});

router.post('/downvote/:storyID', (req, res) => {

    Story
      .find({ "_id": req.params.storyID })
      .then((story) => {
          Story
            .update({ "_id": req.params.storyID }, {$set: { upvotes: story[0].upvotes - 1 }})
            .then(() => {
              res.redirect('/');
            })
      });

});

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/new', (req, res) => {
  Story
    .create(req.body)
    .then(() => {
      res.redirect('/');
    })
});


module.exports = router;