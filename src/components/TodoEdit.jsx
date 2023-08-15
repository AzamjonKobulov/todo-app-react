import React, { useState } from 'react';

const TodoEdit = ({ todo, onEdit, onSetShowEditInput }) => {
  const [newTodo, setNewTodo] = useState(todo.todo);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSetShowEditInput(false);
    onEdit(todo.id, newTodo);
  };

  return (
    <form className="px-5 mt-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Edit todo"
        className="w-full px-3 py-2 rounded outline-none text-gray-500 placeholder:text-gray-500 border-2 focus:border-blue-500"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );
};

export default TodoEdit;
