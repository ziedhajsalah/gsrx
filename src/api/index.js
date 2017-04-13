/* global fetch */
import { v4 } from 'node-uuid'

export const fetchTodos = filter => {
  const query = filter === 'all'
    ? ''
    : filter === 'active' ? '/?completed=false' : '/?completed=true'
  return fetch(`http://localhost:3000/todos${query}`)
}

export const addTodo = text => {
  const todo = {
    id: v4(),
    text,
    completed: false
  }

  return fetch('http://localhost:3000/todos', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
}

export const toggleTodo = id =>
  fetchTodos('all').then(res => res.json())
    .then(todos => todos.find(todo => todo.id === id))
    .then(todo => {
      const toggledTodo = {
        ...todo,
        completed: !todo.completed
      }
      return fetch(`http://localhost:3000/todos/${id}`, {
        method: 'put',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(toggledTodo)
      })
    })
