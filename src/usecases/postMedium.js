const posts = require('../models/postMedium')

async function getPosts () {
  const allMediumPosts = await posts.find()
  return allMediumPosts
}

async function createPost (postData) {
  return posts.create(postData)
}

function deletePost (id) {
  return posts.findByIdAndRemove(id)
}

function updatePost (id, postData) {
  return posts.findByIdAndUpdate(id, postData)
}

module.exports = {
  getPosts,
  createPost,
  deletePost,
  updatePost
}
