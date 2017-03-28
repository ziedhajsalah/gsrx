import React from 'react'
import { submitTodo } from '../lib/actions'

const AddTodo = () => {
  let input
  const handleSubmitTodo = e => {
    e.preventDefault()
    submitTodo(input)
  }
  return (
    <form onSubmit={handleSubmitTodo}>
      <input ref={node => { input = node }} />
    </form>
  )
}

export default AddTodo
