// @flow
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodosList from '../components/TodosList'
import { filterTodos } from '../lib'
import { toggleTodo } from '../actions'

const mapStateToProps = (state, { match }) => ({
  visibleTodos: filterTodos(
    state.todos,
    match.params.filter || 'all'
  )
})

const mapDispatchToProps = dispatch => ({
  toggleTodo (id) { dispatch(toggleTodo(id)) }
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodosList)
)
