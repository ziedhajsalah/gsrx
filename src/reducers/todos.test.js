/* eslint-env jest */
import { store } from './todos'

describe('todos store', () => {
  test('it returns the initial state', () => {
    expect(store.getState()).toEqual({
      todos: [],
      visibilityFilter: 'SHOW_ALL'
    })
  })

  test('it adds new todos correctly', () => {
    const expectedState = {
      todos: [
        {id: 8, text: 'write tests for my app', completed: false}
      ],
      visibilityFilter: 'SHOW_ALL'
    }
    store.dispatch({
      id: 8,
      text: 'write tests for my app',
      type: 'ADD_TODO'
    })

    expect(store.getState()).toEqual(expectedState)
  })

  test('it toggles todos correctly', () => {
    const expectedState = {
      todos: [
        {id: 8, text: 'write tests for my app', completed: true}
      ],
      visibilityFilter: 'SHOW_ALL'
    }
    store.dispatch({
      id: 8,
      type: 'TOGGLE_TODO'
    })

    expect(store.getState()).toEqual(expectedState)
  })

  test('it changes visibilityFilter', () => {
    const expectedState = {
      todos: [
        {id: 8, text: 'write tests for my app', completed: true}
      ],
      visibilityFilter: 'SHOW_ACTIVE'
    }
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_ACTIVE'
    })

    expect(store.getState()).toEqual(expectedState)
  })
})
