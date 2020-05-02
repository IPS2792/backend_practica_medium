const express = require('express')
const users = require('../usecases/usersMedium')
const router = express.Router()

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    const token = await users.userLogin(email, password)

    response.json({
      success: true,
      message: 'logged in',
      data: {
        token
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
