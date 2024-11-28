const express = require('express');
const router = express.Router();
const {getAllPosts} = require('../../database/dataRequests/post');

router.get('/:user_id', (req, res, next)=>{
    console.log("im here!");
    getAllPosts(req.params.user_id, (result) => {
    console.log(result);
    if(!result.success) res.status(401).send("could not fetch posts");
    else res.status(200).send(result.data);
  })
});

// router.post('/', (req, res,next)=>{
//     const title = req.body.title;
//     console.log("title:",title);
//     addTodo(req.body.user_id, title, (result) => {
//         console.log("result: ",result);
//         if(!result.success) res.status(401).send("could not add to-dos");
//         else res.status(200).send(JSON.stringify(result.todoID));
//     })
// })

// router.put('/:todo_id', (req, res,next) => {
//     console.log("here1");
//     editTodo(req.params.todo_id, req.body.key, req.body.value, (result) => {
//         if(!result.success) res.status(401).send("could not change to-do");
//         else res.status(200).send("update successful");
//     })
// })

// router.delete('/:todo_id', (req,res,next) => {
//     deleteTodo(req.params.todo_id, (result) => {
//         res.status(result.success ? 200 : 401);
//     })
// })


const commentRouter = require('../routes/comment');
router.use('/:postId/comment', commentRouter);
module.exports = router;