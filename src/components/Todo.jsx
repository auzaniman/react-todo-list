import React from 'react';
import PropType from 'prop-types';

const Todo = (props) => {
  return (
    <div className="todo">
      <span className="todo-text">{props.text}</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropType.string.isRequired,
};

export default Todo;
