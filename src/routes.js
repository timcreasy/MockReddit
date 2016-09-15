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


module.exports = router;