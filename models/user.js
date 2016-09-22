'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const EMAIL_VALIDATOR = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/;

let userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    match: [EMAIL_VALIDATOR, 'Email is not valid'],
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', function(done) {
  bcrypt.hash(this.password, 12, (err, hash) => {
    if (err) { return next(err) }
    this.password = hash;
    done();
  });
});


module.exports = mongoose.model('User', userSchema);
