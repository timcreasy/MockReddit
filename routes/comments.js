'use strict';

const { Router } = require('express');
const router = Router();
const comments = require('../controllers/comments');

router.get('/comments/:storyID', comments.new);
router.post('/comments/:storyID', comments.create);

module.exports = router;