// @flow
import React from 'react'
import VisibleTodosList from './components/VisibleTodosList'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'

export default function App () {
  return (
    <div>
      <AddTodo />
      <VisibleTodosList />
      <Footer />
    </div>
  )
}
