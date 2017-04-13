import { normalize } from 'normalizr'
import * as schema from './schema'
import * as api from '../api'
import { getIsFetching } from '../reducers'

export const addTodo = text => (dispatch) =>
  api.addTodo(text)
    .then(res => res.json())
    .then(todo => {
      dispatch({
        type: 'ADD_TODO_SUCCESS',
        response: normalize(todo, schema.todo)
      })
    })

export const toggleTodo = id => ({ type: 'TOGGLE_TODO', id })

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) return Promise.resolve()

  dispatch({ type: 'FETCH_TODOS_REQUEST', filter })
  return api.fetchTodos(filter)
    .then(res => res.json())
    .then(todos => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response: normalize(todos, schema.arrayOfTodos)
      })
    })
    .catch(err => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: err.message || 'something went wrong!'
      })
    })
}
