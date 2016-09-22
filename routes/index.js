'use strict';

const { Router } = require('express');
const router = Router();

const home = require('./home');
const vote = require('./vote');
const newPost = require('./new');
const comments = require('./comments');
const login = require('./login');
const register = require('./register');
const logout = require('./logout');

router.use(register);
router.use(login);
router.use(home);

// Guard middleware
router.use((req, res, next) => {
  req.user ? next() : res.redirect('/login');
});

router.use(logout);
router.use(vote);
router.use(newPost);
router.use(comments);

module.exports = router;