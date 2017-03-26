import React from 'react'

const Todo = ({id, completed, text, toggleTodo}) => (
  <li onClick={e => { toggleTodo(id) }}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    {text}
  </li>
)

export default Todo
