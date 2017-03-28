import React from 'react'
import { generateId } from '../lib/index'

const AddTodo = ({store}) => {
  let input
  const handleSubmitTodo = e => {
    e.preventDefault()
    store.dispatch({
      type: 'ADD_TODO',
      text: input.value,
      id: generateId()
    })
    input.value = ''
  }
  return (
    <form onSubmit={handleSubmitTodo}>
      <input ref={node => { input = node }} />
    </form>
  )
}

export default AddTodo
