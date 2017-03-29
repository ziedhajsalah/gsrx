// @flow
import React, { Component, PropTypes } from 'react'
import TodosList from './TodosList'
import { filterTodos } from '../lib'

export default class VisibleTodosList extends Component {
  unsubscribe: () => any

  static contextTypes = {
    store: PropTypes.object
  }

  toggleTodo = (id: number) => {
    this.context.store.dispatch({ type: 'TOGGLE_TODO', id })
  }

  componentDidMount () {
    this.unsubscribe = this.context.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const { todos, visibilityFilter } = this.context
      .store.getState()
    return (
      <TodosList toggleTodo={this.toggleTodo}
        visibleTodos={filterTodos(todos, visibilityFilter)} />
    )
  }
}
