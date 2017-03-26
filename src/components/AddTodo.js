import React from 'react'

const AddTodo = ({handleSubmit}) => {
  let input
  const submitTodo = e => {
    e.preventDefault()
    handleSubmit(input)
  }
  return (
    <form onSubmit={submitTodo}>
      <input ref={node => { input = node }} />
    </form>
  )
}

export default AddTodo
