'use strict';

const { Router } = require('express');
const router = Router();

const home = require('./home');
const vote = require('./vote');
const newPost = require('./new');
const comments = require('./comments');
const login = require('./login');
const register = require('./register');

router.use(register);
router.use(login);
router.use(home);
router.use(vote);
router.use(newPost);
router.use(comments);

module.exports = router;