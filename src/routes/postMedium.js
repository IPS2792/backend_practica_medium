const express = require('express')
const router = express.Router()
const posts = require('../usecases/postMedium')
// const auth = require('../middlewares/auth')
const cors = require('cors')

router.use(cors())

router.get('/', async (request, response) => {
  try {
    const allMediumPosts = await posts.getPosts()
    response.json({
      message: 'All Posts in Medium',
      data: {
        posts: allMediumPosts
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

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postById = await posts.getPostsById(id)
    response.json({
      success: true,
      message: `Post with id ${id} is available`,
      data: {
        post: postById
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

router.post('/', async (request, response) => {
  try {
    const newPost = await posts.createPost(request.body)
    response.json({
      success: true,
      message: 'Great! New post was created',
      data: {
        post: newPost
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

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postDeleted = await posts.deletePost(id)
    response.json({
      success: true,
      message: `Post with id ${id} was deleted`,
      data: {
        post: postDeleted
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

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postUpdate = await posts.updatePost(id, request.body)
    response.json({
      success: true,
      message: `Post with id ${id} was updated`,
      data: {
        post: postUpdate
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
