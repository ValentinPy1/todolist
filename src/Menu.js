import React, {useRef} from 'react'
import LOCAL_STORAGE_KEY from './App.js'

export default function Menu({todos, setTodos}) {
    const todoNameRef = useRef();

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

    document.addEventListener('keydown', (e) => {if(e.key == 'Backspace') clearComplete()});

    return (
    <div className="header">
        <h1>{todos.filter(todo => !todo.complete).length} left to do</h1>
        <input
            ref={todoNameRef}
            type='text'
            onKeyPress={(event) => {if (event.key == 'Enter') addTodo()}}
        />
        <span id="addBtn" onClick={addTodo}>Add Todo</span>
        <span id="clearBtn" onClick={clearComplete}>Clear Completed</span>
    </div>
  )
}
