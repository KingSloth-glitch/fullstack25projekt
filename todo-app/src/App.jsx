import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'Learn React',
    'Learn Cypress',
    'Learn Playwright',
  ]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      <AddTodo onAddTodo={handleAddTodo} />

      <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

export default App;
