const express = require('express');
const router = express.Router();
const {getAllTodos, addTodo} = require('../../database/dataRequests/todo');
console.log(getAllTodos);

router.get('/:user_id', (req, res, next)=>{
    console.log("im here!");
    getAllTodos(req.params.user_id, (result) => {
    console.log(result);
    if(!result.success) res.status(401).send("could not fetch to-dos");
    else res.status(200).send(result.data);
  })
});

router.post('/:user_id', (req, res,next)=>{
    console.log(req.body.title);
    addTodo(req.params.user_id, req.body.title, (result) => {
        console.log(result);
        res.send(result);
    })
})

module.exports = router;