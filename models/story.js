const mongoose = require('mongoose');

module.exports = mongoose.model('Story', {
  title: String,
  image: String,
  url: String,
  upvotes: Number
});