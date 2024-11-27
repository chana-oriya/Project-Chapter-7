import React, { useState } from "react";
import apiRequest from "../functions/requestApi";
import TodoItem from "../components/TodoItem";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [faildRequest, setFaildRequest] = useState(false);
  useState(async () => {
    //  const data = await apiRequest("todos")
    // const data ={error:"name"}
    const data = [
      { id: 1, title: "todo", body: "body", completed: true },
      { id: 2, title: "todo1", body: "body1", completed: false },
    ];
    if (data.error) {
      setFaildRequest(true);
    } else {
      setTodos(data);
      console.log("data: ", data);
    }
  }, []);
  useState(()=>{
    console.log('todos: ', todos);

  },[todos])

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todos</h1>
      {faildRequest && <h3>something went wrong, faild to load todos</h3>}
      {todos &&
        todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onToggle={toggleTodo} />
        ))}
    </div>
  );
};

export default Todos;
