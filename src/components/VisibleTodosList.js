// @flow
import React, { Component } from 'react'
import TodosList from './TodosList'
import { filterTodos } from '../lib'
import { toggleTodo } from '../lib/actions'
import { store } from '../reducers/todos'

export default class VisibleTodosList extends Component {
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const { todos, visibilityFilter } = store.getState()
    return (
      <TodosList toggleTodo={toggleTodo}
        visibleTodos={filterTodos(todos, visibilityFilter)} />
    )
  }
}
