// @flow
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({dispatch}) => {
  let input
  const handleSubmitTodo = e => {
    e.preventDefault()
    dispatch(addTodo(input.value))
    input.value = ''
  }
  return (
    <form onSubmit={handleSubmitTodo}>
      <input ref={node => { input = node }} />
    </form>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
