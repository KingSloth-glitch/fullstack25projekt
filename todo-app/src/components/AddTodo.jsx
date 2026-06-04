import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) return;

    onAddTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
