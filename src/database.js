"use strict";

const mongoose = require('mongoose');

const MONGOOSE_DB_URL = 'mongodb://localhost:27017/reddit';

mongoose.Promise = Promise;

module.exports.connect = () => mongoose.connect(MONGOOSE_DB_URL)