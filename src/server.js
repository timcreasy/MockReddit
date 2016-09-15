"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { connect } = require('./database');

const app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

connect()
  .then(() => {
    app.listen(3000, () => {
      console.log("Listening on port 3000...");
    });
  });