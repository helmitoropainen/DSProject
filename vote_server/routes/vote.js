var express = require('express');
var router = express.Router();
const Post = require("../models/Posts")
var validateToken = require("../auth/validateToken")
const { Buffer } = require('buffer')
const dotenv = require("dotenv")
dotenv.config()

/* Vote */
/* Set vote user based on httpOnly cookie */
/* If vote for certain post exist from user then update the old one, otherwise push new vote to list */
router.post("/vote", validateToken, async function (req, res, next) {
  let token = req.cookies["token"]
  let userID = JSON.parse(Buffer.from(token.split(".")[1], "base64")).id
  let postID = req.body.post
  let voteValue = req.body.vote
  let vote = { user: userID, vote: voteValue }

  try {
    let post = await Post.findOneAndUpdate({_id: postID, "votes.user": userID}, { $set: { 'votes.$': vote } }, {new: true}) 
    if (post) {
      console.log("old", post)
      res.status(200)
      res.json({post: post})
    } else {
      let post = await Post.findByIdAndUpdate(postID, { $push: { votes: vote }}, {new: true})
      if(post) {
        console.log("new", post)
        res.status(200)
        res.json({post: post})
      } else {
        console.log("nothing")
        res.status(404)
        res.json({success: false})
      }
    }
  } catch (e) { throw e }
})

module.exports = router;
