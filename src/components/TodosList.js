// @flow
import React from 'react'
import Todo from './Todo'

type Props = {
  visibleTodos: Array<any>,
  toggleTodo(): void
}

const TodosList = ({visibleTodos, toggleTodo}: Props) => (
  <ul>
    {
      visibleTodos.map(
        todo => <Todo {...todo} toggleTodo={toggleTodo} key={todo.id} />
      )
    }
  </ul>
)

export default TodosList
