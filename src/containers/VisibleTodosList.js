// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodosList from '../components/TodosList'
import { toggleTodo, fetchTodos } from '../actions'
import { getVisibleTodos } from '../reducers'

class VisibleTodosList extends Component {
  fetchData = () => {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter)
  }

  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  render () {
    const { toggleTodo, ...rest } = this.props

    return <TodosList {...rest} toggleTodo={toggleTodo} />
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all'

  return {
    visibleTodos: getVisibleTodos(state, filter),
    filter
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo (id) {
    dispatch(toggleTodo(id))
  },
  fetchTodos (filter, todos) {
    dispatch(fetchTodos(filter, todos))
  }
})

/* eslint-disable no-class-assign */
VisibleTodosList = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VisibleTodosList)
)

export default VisibleTodosList
