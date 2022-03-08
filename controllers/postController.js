const express = require("express");
const Post = require("./../models/Post");
const Comment = require("./../models/Comment.js");

const router = express.Router();

//view feed
router.get("/", (req, res) => {
  Post.find().then((posts) => {
    res.status(200).json(posts);
  });
});

//create a new post
router.post("/post", (req, res) => {
  const data = req.body;
  Post.create(data).then((post) => {
    res.status(200).json(post);
  });
});

//view comments
router.get("/post/:postId", (req, res) => {
  Post.findById(req.params.postId, req.body, {
    new: true,
  }).then((post) => {
    res.status(200).json(post);
  });
});

//update a post detail
router.patch("/post/:postId", (req, res) => {
  Post.findByIdAndUpdate(req.params.postId, req.body, {
    new: true,
  }).then((post) => {
    res.status(200).json(post);
  });
});
//update a comment
// router.patch("/post/:postId/comment/:commentId", (req, res) => {
//   Post.findById(req.params.postId).then((post) => {
//     Comment.findByIdAndUpdate(req.params.commentId, req.body, {
//       new: true
//     }).then((post) => {
//       res.status(200).json(post);
//       post.save()
//     });
//   });
// });

//destroy a single comment
// router.delete("/post/:postId/comment/commentId", (req, res) => {
//   Post.findByIdAndDelete(req.params.commentId, req.body, {
//     new: true,
//   }).then((post) => {
//     res.status(200).json(post);
//   });
// });

module.exports = router;
