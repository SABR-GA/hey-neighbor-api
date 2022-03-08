const express = require('express')
const router = express.Router()
const Comment = require('./../models/Comment.js')
const Post = require('./../models/Post.js')
// Require the Comment controller.


// Write the route to create a comment
router.put('/post/:postId/comment/:commentId', async (req, res) => {
    const comment = await Comment.findById(req.params.commentId)
    const post = await Post.findById(req.params.postId).populate('comments')
    post.comment.push(comment)
    post.save()
    res.json({
        status: 200,
        post: post
    })
  })


// Write the route to update a comment
router.patch("/post/:postId/comment/:commentId", (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((post) => {
      res.json({
          status: 200,
          msg: "item update",
          post: post,
       
    })
     });
  });
// Write the route to delete a comment by id

router.delete("/post/:postId/comment/:commentId", (req, res) => {
    Comments.findByIdAndDelete(req.params.id).then((post) => {
      res.json({
          status: 200,
          msg: "item deleted",
          post: post,
       
    })
     });
  });

module.exports = router;