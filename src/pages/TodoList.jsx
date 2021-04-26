import React from 'react';

import Paper from '../components/Paper';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

function TodoList() {
  return (
    <Paper>
      <Header></Header>
      <TodoForm></TodoForm>
      <Todos></Todos>
    </Paper>
  );
}

export default TodoList;
