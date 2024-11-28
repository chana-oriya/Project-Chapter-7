const express = require('express');
const router = express.Router();
const {getAllTodos, addTodo, editTodo, deleteTodo} = require('../../database/dataRequests/todo');
console.log(getAllTodos);

router.get('/:user_id', (req, res, next)=>{
    console.log("im here!");
    getAllTodos(req.params.user_id, (result) => {
    console.log(result);
    if(!result.success) res.status(401).send("could not fetch to-dos");
    else res.status(200).send(result.data);
  })
});

router.post('/', (req, res,next)=>{
    const title = req.body.title;
    console.log("title:",title);
    addTodo(req.body.user_id, title, (result) => {
        console.log("result: ",result);
        if(!result.success) res.status(401).send("could not add to-dos");
        else res.status(200).send(JSON.stringify(result.todoID));
    })
})

router.put('/:todo_id', (req, res,next) => {
    console.log("here1");
    editTodo(req.params.todo_id, req.body.key, req.body.value, (result) => {
        if(!result.success) res.status(401).send("could not change to-do");
        else res.status(200).send("update successful");
    })
})

router.delete('/:todo_id', (req,res,next) => {
    deleteTodo(req.params.todo_id, (result) => {
        if(!result.success) res.status(401).send("could not delete to-do");
        else res.status(200).send("delete successful");
    })
})

module.exports = router;