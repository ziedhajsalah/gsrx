// @flow
import React from 'react';
import Todo from './Todo';
import CSSTransition from 'react-transition-group/CSSTransition';

const Fade = ({ children }) =>
  <CSSTransition timeout={70} classNames="fade">
    {children}
  </CSSTransition>;

type Props = {
  visibleTodos: Array<any>,
  toggleTodo(id: number): void,
};

const TodosList = ({ visibleTodos, toggleTodo }: Props) =>
  <Fade>
    <ul className="todo-list">
      {visibleTodos.map(todo =>
        <Todo {...todo} toggleTodo={toggleTodo} key={todo.id} />
      )}
    </ul>
  </Fade>;

export default TodosList;
