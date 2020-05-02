const mongoose = require('mongoose')

const postMediumSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true
  },
  category: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true
  },
  estimatedReadTime: {
    type: String,
    minlength: 10,
    maxlength: 11,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('posts', postMediumSchema)
