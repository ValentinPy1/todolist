import React from 'react'

export default function Todo({todo, toggleTodo}) {
  return (
    <div
    className = { todo.complete ? 'todo complete' : 'todo uncomplete' }
    onClick={ () => { toggleTodo(todo.id) }
    }>
    {todo.name}
    </div>
  )
}
