"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { connect } = require('./database');

const app = express();

const port = process.env.PORT || 3000
app.set('port', port)

app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.use((req, res) => {
  res.render('404');
});

app.use((error, req, res, next) => {
  res.sendStatus(500);
  console.log(error);
});

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });