import React, { useState, useEffect, useRef } from "react";
import apiRequest from "../functions/requestApi";

const TodoItem = ({ todo, onToggle, onUpdateTitle, onDelete  }) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title); 
  const [isTitleUpdated, setIsTitleUpdated] = useState(false);

  const prevCompleted = useRef(todo.completed);
  const prevTitle = useRef(todo.title);

  const handleChange = async () => {
    console.log("completed changed");
    onToggle(todo.id); 
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value); 
  };

  const handleTitleSave = () => {
    setEditMode(false); 
    setIsTitleUpdated(true); 
    onUpdateTitle(todo.id, newTitle)
  };
  
  const handleDelete = () =>{
    const resault = apiRequest(`todos/${todo.id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (resault.error){
        console.log('resault.error: ', resault.error);
    }else{
        onDelete(todo.id);
    }  
  }

  
  useEffect(() => {
    if (!isTitleUpdated) return;
    const updatedData = {};

    if (todo.completed !== prevCompleted.current) {
        updatedData.key = "completed"
      updatedData.value = todo.completed;
      prevCompleted.current = todo.completed; 
    }

    if (newTitle !== prevTitle.current) {
      updatedData.key = "title";
      updatedData.value = newTitle;
      prevTitle.current = newTitle; 
    }
   
    if (Object.keys(updatedData).length > 0) {
      const updateTodo = updatedData; 
      

      const updateData = async () => {
        const result = await apiRequest(`todos/${todo.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateTodo),
        });
        console.log("result: ", result);
      };

      updateData();
      setIsTitleUpdated(false);
    }
  }, [newTitle, isTitleUpdated, todo.id]); 

  return (
    <div>
      {editMode ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={handleTitleChange} 
          />
          <button onClick={handleTitleSave}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.completed}
            onChange={handleChange} 
          />
          <label htmlFor={todo.id}>{todo.title}</label>
        </>
      )}
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? "Cancel" : "Edit"}
      </button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default TodoItem;
