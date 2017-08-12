import React from 'react';

const Todo = ({ id, completed, text, toggleTodo }) =>
  <li
    onClick={e => {
      toggleTodo(id);
    }}
    className={
      completed ? 'todo-list__item--completed' : 'todo-list__item--active'
    }
  >
    {text}
  </li>;

export default Todo;
