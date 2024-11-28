import React, { useEffect, useState } from "react";
import apiRequest from "../functions/requestApi";
import TodoItem from "../components/TodoItem";
import checkIfLogedin from "../functions/checkIfLogedin";
import AddTodo from "../components/AddTodo";

const Todos = ({currentuser}) => {
  const [todos, setTodos] = useState([]);
  const [addTodo, setAddTodo] = useState(false);

  checkIfLogedin()
  useEffect(() => {
    if(currentuser){
      async function getTodos() {
        console.log(JSON.parse(await apiRequest("todos/" + JSON.parse(window.localStorage.getItem("currentuser")).id)));
        const data = JSON.parse(await apiRequest("todos/" + JSON.parse(window.localStorage.getItem("currentuser")).id))
        setTodos(data);
        console.log('Todos: ', todos);
      } 
      getTodos();
    }
  }, []);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div key="todos">
      <h1>Todos</h1>
      <button onClick={() => setAddTodo(!addTodo)}>Add To Do</button>
      {addTodo && (
        <AddTodo
          currentuser={currentuser}
          setAddTodo={setAddTodo}
          addTodo={addTodo}
          setTodos={setTodos}
        />
      )}
      {!todos && <h3>loading...</h3>}
      {todos && todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onToggle={toggleTodo} />
        ))}
    </div>
  );
};

export default Todos;
