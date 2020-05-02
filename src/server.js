const express = require('express')
const postsRouter = require('./routes/postMedium')
const usersRouter = require('./routes/usersMedium')
const authRouter = require('./routes/auth')
const app = express()

app.use(express.json())
app.use('/posts', postsRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

module.exports = app
