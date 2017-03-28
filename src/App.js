// @flow
import React from 'react'
import VisibleTodosList from './components/VisibleTodosList'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodosList />
    <Footer />
  </div>
)

export default App
