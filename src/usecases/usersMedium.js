const users = require('../models/usersMedium')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

async function usersSignUp (userData) {
  const { email, password } = userData
  const usersExists = await users.findOne({ email })
  if (usersExists) throw new Error('This user email already exist')
  if (password.length < 8) throw new Error('Password must have at least 8 characters')
  const pwHash = await bcrypt.hash(password, 10)
  return users.create({ ...userData, password: pwHash })
}

async function userLogin (email, password) {
  const user = await users.findOne({ email })
  if (!user) throw new Error('Invalid data')

  const passwordValid = await bcrypt.compare(password, user.password)
  if (!passwordValid) throw new Error('Invalid data')

  return jwt.sign({ id: user._id })
}

module.exports = {
  usersSignUp,
  userLogin
}