const express = require('express');
const router = express.Router({ mergeParams: true });  
const {getAllPostComments} = require('../../database/dataRequests/comment');

router.get('/', (req, res) => {
  const { postId } = req.params;
  getAllPostComments(postId, (result) => {
    console.log(result);
    if(!result.success) res.status(401).send("could not fetch comments");
    else res.status(200).send(result.data)})
 
});

router.post('/', (req, res) => {
  const { postId } = req.params;
  res.send(`Create a new comment for post ${postId}`);
});

router.delete('/:commentId', (req, res) => {
  const { postId, commentId } = req.params;
  res.send(`Delete comment ${commentId} from post ${postId}`);
});

module.exports = router;