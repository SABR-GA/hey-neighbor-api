const express = require("express");
const router = express.Router();
const Comment = require("./../models/Comment.js");
const Post = require("./../models/Post.js");
// Require the Comment controller.

// Write the route to create a comment
router.post("/post/:postId/comment/", async (req, res) => {
  const comment = await Comment.create(req.body);
  const post = await Post.findById(req.params.postId);
  post.Comments.push(comment);
  post.save();
  res.json({
    status: 200,
    post: post,
  });
});
// router.put('/post/:postId/comment/:commentId', async (req, res) => {
//     const comment = await Comment.findById(req.params.commentId)
//     const post = await Post.findById(req.params.postId).populate('comments')
//     post.comment.push(comment)
//     post.save()
//     res.json({
//         status: 200,
//         post: post
//     })
//   })

// Write the route to update a comment
// router.patch("/post/:postId/comment/:commentId", (req, res) => {
//   Post.findById(req.params.postId).then((post) => {
//     Comment.findByIdAndUpdate(req.params.commentId, req.body, {
//       new: true,
//     }).then((post) => {
//       res.status(200).json(post);
//       post.save()
//     });
//   });
// });

// router.patch("/post/:postId/comment/commentId", (req, res) => {
//   Post.findById(req.params.postId)
//     .then((post) => {
//       //  console.log(post.Comment)
//       Comment.findByIdAndUpdate(req.params.commentId, req.body, {
//         new: true
//       })
//       //  post.save()
//     })
//     .then((post) => {
//       res.status(200).json(post);
//     });
// });

router.patch("/post/:postId/comment/commentId", async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(req.params.commentId, req.body);
  const post = await Post.findById(req.params.postId);
  post.Comments[comment]

  post.save();
  res.json({
    status: 200,
    post: post,
  });
});
// Write the route to delete a comment by id

router.delete("/post/:postId/comment/:commentId", (req, res) => {
  Comment.findByIdAndDelete(req.params.id).then((post) => {
    res.json({
      status: 200,
      msg: "item deleted",
      post: post,
    });
  });
});

module.exports = router;
