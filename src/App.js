import React from 'react'
import TodosList from './components/TodosList'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import { filterTodos } from './lib'
import { submitTodo, toggleTodo } from './lib/actions'

const App = ({todos, visibilityFilter}) => (
  <div>
    <AddTodo handleSubmit={submitTodo} />
    <TodosList toggleTodo={toggleTodo}
      visibleTodos={filterTodos(todos, visibilityFilter)}
    />
    <Footer />
  </div>
)

export default App