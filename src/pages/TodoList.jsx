import React, { useState } from 'react';

import Paper from '../components/Paper';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

const TodoList = () => {
  const [todos, setTodos] = useState([

    { text: "Learning React" },
    { text: "Learning React Hooks" },
    { text: "Learning styling in React" }
  ])

  const addTodo = value => {
    const addedTodo = [...todos, { text: value }]

    setTodos(addedTodo)
  }

  return (
    <Paper>
      <Header></Header>
      <TodoForm addTodo={addTodo}></TodoForm>
      <Todos todos={todos}></Todos>
    </Paper>
  );
}

export default TodoList;
