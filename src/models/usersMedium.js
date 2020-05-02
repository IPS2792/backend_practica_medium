const mongoose = require('mongoose')

const usersMediumSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    minlength: 8,
    required: true
  }
})

module.exports = mongoose.model('users', usersMediumSchema)
