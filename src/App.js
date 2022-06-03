import React, {useState, useRef, useEffect} from 'react';
import TodoList from "./TodoList.js";

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([{id: 0, name: 'Learn React', complete: false}]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  function toggleTodo(id) {
    const next = [...todos];
    const todo = next.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(next);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
  }

  function addTodo() {
    const name = todoNameRef.current.value
    if (name === '') return;
    const next = [...todos, {id: Date.now(), name, complete: false}]
    setTodos(next);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
    todoNameRef.current.value = null;
  }

  function clearComplete() {
    const next = todos.filter(todo => !todo.complete);
    setTodos(next);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
  }

  return (
    <div className="App">
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      <input ref={todoNameRef} type='text'/>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearComplete}>Clear Complete</button>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>

  );
}

export default App;
