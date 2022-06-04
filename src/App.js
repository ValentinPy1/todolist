import React, {useState, useEffect} from 'react';
import TodoList from "./TodoList.js";
import Menu from './Menu.js';
import './App.css'

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([{id: 0, name: 'Learn React', complete: false}]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setTodos(storedTodos);
  }, []);

  function toggleTodo(id) {
    const next = [...todos];
    const todo = next.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(next);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
  }

  return (
    <div className="App">
    <Menu todos={todos} setTodos={setTodos}/>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
    );
  }

  export default App;
