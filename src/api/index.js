/* global fetch */
import { v4 } from 'node-uuid'

export const fetchTodos = filter => {
  const query = filter === 'all'
    ? ''
    : filter === 'active' ? '/?completed=false' : '/?completed=true'
  return fetch(`http://localhost:3000/todos${query}`)
}
