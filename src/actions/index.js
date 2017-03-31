import { generateId } from '../lib'

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    text,
    id: generateId()
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
