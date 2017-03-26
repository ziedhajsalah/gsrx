import React from 'react'
import Todo from './Todo'

const TodosList = ({visibleTodos, toggleTodo}) => (
  <ul>
    {
      visibleTodos.map(
        todo => <Todo {...todo} toggleTodo={toggleTodo} key={todo.id} />
      )
    }
  </ul>
)

export default TodosList
