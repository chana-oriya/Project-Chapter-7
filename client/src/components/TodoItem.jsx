import React from "react";

const TodoItem = ({ todo, onToggle }) => {
  const handleChange = () => {
    onToggle(todo.id);
  };
  return (
    <div>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.completed}
        onChange={handleChange}
      />
      <label htmlFor={todo.id}>{todo.title}</label>
    </div>
  );
};

export default TodoItem;
