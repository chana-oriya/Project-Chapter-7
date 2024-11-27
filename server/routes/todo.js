const express = require('express');
const router = express.Router();
const getAllTodos = require('../../database/dataRequests/todo');


router.get('/:user_id', (req, res, next)=>{
  getAllTodos(req.params.user_id, (result) => {
    if(!result.success) res.status(401).send("could not fetch to-dos");
    else res.status(200).send(result.data);
  })
});

module.exports = router;