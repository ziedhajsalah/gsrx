// @flow
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodosList from '../components/TodosList'
import { toggleTodo } from '../actions'
import { getVisibleTodos } from '../reducers'

const mapStateToProps = (state, { match }) => ({
  visibleTodos: getVisibleTodos(
    state,
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
