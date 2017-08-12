// @flow
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;
  const handleSubmitTodo = e => {
    e.preventDefault();
    if (input.value === '') {
      return;
    }
    dispatch(addTodo(input.value));
    input.value = '';
  };
  return (
    <form onSubmit={handleSubmitTodo} className="add-todo">
      <input
        ref={node => {
          input = node;
        }}
        className="add-todo__input"
        placeholder="new todo"
      />
      <button type="submit" className="add-todo__button">
        Add Todo
      </button>
    </form>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
