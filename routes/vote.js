'use strict';

const { Router } = require('express');
const router = Router();
const vote = require('../controllers/vote');

router.post('/upvote/:storyID', vote.upvote);
router.post('/downvote/:storyID', vote.downvote);

module.exports = router;