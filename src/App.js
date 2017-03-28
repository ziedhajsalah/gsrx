// @flow
import React from 'react'
import VisibleTodosList from './components/VisibleTodosList'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'

const App = ({store}) => (
  <div>
    <AddTodo store={store} />
    <VisibleTodosList store={store} />
    <Footer store={store} />
  </div>
)

export default App
