"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('../database/database');
const passport = require('passport');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const app = express();

const port = process.env.PORT || 3000
app.set('port', port)
app.set('views', 'views');
app.set('view engine', 'pug');

require('../passport-strategy');
app.use(session({
  store: new RedisStore(),
  secret: 'mysupersecretkey'
}));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('../routes/'));

app.use((req, res) => {
  res.render('404');
});

app.use((error, req, res, next) => {
  res.sendStatus(500);
  console.log("ERROR:", error);
});

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });