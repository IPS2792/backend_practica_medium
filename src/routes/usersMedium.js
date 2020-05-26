const express = require('express')
const router = express.Router()
const users = require('../usecases/usersMedium')
const cors = require('cors')

router.use(cors())

router.post('/signup', async (request, response) => {
  try {
    const newUser = await users.usersSignUp(request.body)
    response.json({
      success: true,
      message: 'New user was registered successfully',
      data: {
        use: newUser
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
