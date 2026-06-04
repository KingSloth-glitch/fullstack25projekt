// Todo.jsx

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTodo, removeTodo } from './action';

function Todo() {
  const [input, setInput] = useState('');

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));

      setInput('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Skriv todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAddTodo}>Lägg till</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
