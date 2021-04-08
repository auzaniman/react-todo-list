import './App.css';
import Paper from './components/Paper';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <Paper>
      <Header></Header>
      <TodoForm></TodoForm>
      <Todos></Todos>
    </Paper>
  );
}

export default App;
