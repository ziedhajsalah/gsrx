// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodosList from '../components/TodosList'
import { toggleTodo } from '../actions'
import { getVisibleTodos } from '../reducers'
import { fetchTodos } from '../api'

class VisibleTodosList extends Component {
  componentDidMount () {
    fetchTodos(this.props.filter)
      .then(res => res.json())
      .then(json => console.log(this.props.filter, json))
  }

  componentDidUpdate (prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter)
        .then(res => res.json())
        .then(json => console.log(this.props.filter, json))
    }
  }

  render () {
    return <TodosList {...this.props} />
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
  toggleTodo (id) { dispatch(toggleTodo(id)) }
})

VisibleTodosList = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VisibleTodosList)
)

export default VisibleTodosList
