import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert('no blank todo');
      return;
    }

    addTodo(value);
    setValue('');
  };

  return (
    <section className="add">
      <form action="" className="add-form" onSubmit={handleFormSubmit}>
        <input type="text" value={value} className="add-input" onChange={(e) => setValue(e.target.value)} />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
