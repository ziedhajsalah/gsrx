// @flow
import React from 'react'
import VisibleTodosList from './containers/VisibleTodosList'
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
