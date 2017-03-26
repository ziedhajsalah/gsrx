import { store } from '../reducers/todos'
import { generateId } from './index'

export const submitTodo = input => {
  store.dispatch({
    type: 'ADD_TODO',
    text: input.value,
    id: generateId()
  })
  input.value = ''
}

export const setFilter = filter => {
  store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter })
}

export const toggleTodo = id => store.dispatch({ type: 'TOGGLE_TODO', id })
