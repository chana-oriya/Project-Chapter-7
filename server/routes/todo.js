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
    console.log(title);
    addTodo(req.body.userID, title, (result) => {
        console.log(result);
        if(!result.success) res.status(401).send("could not add to-dos");
        else res.status(200).send(result.todoID);
    })
})

router.put('/:todo_id', (req, res,next) => {
    editTodo(req.params.todo_id, req.body.key, req.body.value, (result) => {
        if(!result.success) res.status(401).send("could not add to-dos");
        else res.status(200).send(null);
    })
})

router.delete('/:todo_id', (req,res,next) => {
    deleteTodo(req.params.todo_id, (result) => {
        res.status(result.success ? 200 : 401);
    })
})

module.exports = router;