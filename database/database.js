"use strict";

const mongoose = require('mongoose');

const MONGOOSE_DB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/reddit'
// const MONGOOSE_DB_URL = 'mongodb://username:password@ds033096.mlab.com:33096/database0327';

mongoose.Promise = Promise;

module.exports.connect = () => mongoose.connect(MONGOOSE_DB_URL)