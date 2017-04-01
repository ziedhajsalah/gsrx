// @flow
import React from 'react'
import VisibleTodosList from '../containers/VisibleTodosList'
import Footer from './Footer'
import AddTodo from './AddTodo'

export default function App () {
  return (
    <div>
      <AddTodo />
      <VisibleTodosList />
      <Footer />
    </div>
  )
}
