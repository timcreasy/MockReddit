const mongoose = require('mongoose');

module.exports = mongoose.model('Story', {
  title: { type: String, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
  upvotes: { type: Number, default: 0, required: true },
  comments: {
    type: [
      {
        author: {type: String, required: true},
        comment: {type: String, required: true},
        date: {type: String, default: new Date().toString()}
      }
    ],
    default: []
  }
});