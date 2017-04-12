// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodosList from '../components/TodosList'
import { toggleTodo, fetchTodos, requestTodos } from '../actions'
import { getVisibleTodos, getIsFetching } from '../reducers'

class VisibleTodosList extends Component {
  fetchData = () => {
    const { filter, requestTodos, fetchTodos } = this.props
    requestTodos(filter)
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
    const { toggleTodo, visibleTodos, isFetching } = this.props
    if (isFetching && !visibleTodos.length) {
      return <p>Loading...</p>
    }

    return <TodosList visibleTodos={visibleTodos} toggleTodo={toggleTodo} />
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all'

  return {
    visibleTodos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo (id) {
    dispatch(toggleTodo(id))
  },
  fetchTodos (filter, todos) {
    dispatch(fetchTodos(filter, todos))
  },
  requestTodos (filter) {
    dispatch(requestTodos(filter))
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
