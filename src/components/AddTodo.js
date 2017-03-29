import React, { PropTypes } from 'react'
import { generateId } from '../lib/index'

const AddTodo = (props, {store}) => {
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

AddTodo.contextTypes = {
  store: PropTypes.object
}

export default AddTodo
