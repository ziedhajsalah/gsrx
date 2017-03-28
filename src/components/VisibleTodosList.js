// @flow
import React, { Component } from 'react'
import TodosList from './TodosList'
import { filterTodos } from '../lib'

export default class VisibleTodosList extends Component {
  toggleTodo = (id: number) => {
    this.props.store.dispatch({ type: 'TOGGLE_TODO', id })
  }

  componentDidMount () {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const { todos, visibilityFilter } = this.props
      .store.getState()
    return (
      <TodosList toggleTodo={this.toggleTodo}
        visibleTodos={filterTodos(todos, visibilityFilter)} />
    )
  }
}
