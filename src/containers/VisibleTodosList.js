// @flow
import { connect } from 'react-redux'
import TodosList from '../components/TodosList'
import { filterTodos } from '../lib'
import { toggleTodo } from '../actions'

const mapStateToProps = state => {
  return {
    visibleTodos: filterTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList)
