import React, { useState } from "react";
import apiRequest from "../functions/requestApi";

const AddTodo = ({ currentuser, setAddTodo, addTodo, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  async function handleClick() {
    const newTodoObj = {
      title: newTodo,
      user_id:currentuser.id,
      completed:false
    };
    const newTodoId = await apiRequest(`todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoObj),
    });
    if (newTodoId.error) {
        alert(`failed to add new todo:${newTodoId.error}`)
    }else{
        newTodoObj.id=newTodoId;
        setTodos((prev)=>[...prev,newTodoObj])
        setAddTodo(!addTodo);
    }
    

   
  }
  return (
    <div>
      <label htmlFor="newTodo">enter new to do:</label>
      <input
        type=""
        id="newTodo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTodo;