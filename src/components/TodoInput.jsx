import React from 'react';

const TodoInput = ({ todo, onSetTodo, onCreate }) => {
  return (
    <form className="px-5 mt-5" onSubmit={onCreate}>
      <input
        type="text"
        placeholder="Add todo"
        className="w-full px-3 py-2 rounded outline-none text-gray-500 placeholder:text-gray-500 border-2 focus:border-blue-500"
        value={todo}
        onChange={(e) => onSetTodo(e.target.value)}
      />
    </form>
  );
};

export default TodoInput;
