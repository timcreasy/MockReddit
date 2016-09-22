const { Router } = require('express');
const router = Router();
const session = require('../controllers/session');

router.get('/logout', session.destroy);

module.exports = router;