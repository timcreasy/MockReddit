"use strict";

const { Router } = require('express');
const router = Router();
const Story = require('../models/story');

// router.get('/', (req, res) => {
//   res.render('home');
// });

router.get('/', (req, res) => {
  Story
    .find()
    .sort({upvotes: -1})
    .then((stories) => {
      res.render('home', {stories});
    })
});

router.param('storyID', function (req, res, next, storyID) {
  console.log("IN PARAM", storyID);
  next();
});

router.post('/upvote/:storyID', (req, res) => {

  // Story
  //   .update({ "_id": req.params.storyID }, {$set: { upvotes: 10000}}, () => {
  //     console.log("UPDATED");
  //     res.send(201);
  //   })

  Story
    .update({ "_id": req.params.storyID }, {$set: { upvotes: 11111}})
    .then((data) => {
      console.log("MY DATA", data);
    })
    .then(() => {
      res.redirect('/');
    })


  // next();
});

router.post('/downvote/:storyID', (req, res, next) => {
  console.log(req.params.storyID);
  next();
});


module.exports = router;