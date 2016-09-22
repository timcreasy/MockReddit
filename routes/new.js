'use strict';

const { Router } = require('express');
const router = Router();
const newPost = require('../controllers/new');

router.get('/new', newPost.new);
router.post('/new', newPost.create);

module.exports = router;
