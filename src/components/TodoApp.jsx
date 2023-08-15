import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoInfo from './TodoInfo';
import TodoEdit from './TodoEdit';

const TodoApp = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [searchedTodo, setSearchedTodo] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showEditInput, setShowEditInput] = useState(false);

  const searchedTodos = todos.filter((todo) =>
    todo.todo.toLowerCase().includes(searchedTodo.toLowerCase())
  );

  const handleCreateTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      todo,
      done: false,
    };

    setTodos([...todos, newTodo]);

    setTodo('');
  };

  const handleToggleTodoItem = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, newTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: newTodo } : todo))
    );
  };

  return (
    <div className="max-w-3xl w-full bg-white border shadow rounded">
      <h1 className="font-bold text-center uppercase text-3xl mt-5">
        Things to do
      </h1>
      {showInput &&
        (showEditInput ? (
          <TodoEdit
            todo={todo}
            onEdit={handleEdit}
            onSetShowEditInput={setShowEditInput}
          />
        ) : (
          <TodoInput
            todo={todo}
            onSetTodo={setTodo}
            onCreate={handleCreateTodo}
          />
        ))}
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodoItem}
        showCompleted={showCompleted}
        searchedTodos={searchedTodos}
        onDelete={handleDelete}
        onSetShowEditInput={setShowEditInput}
      />
      <TodoInfo
        todos={todos}
        onSetShowCompleted={setShowCompleted}
        onSetSearchedTodo={setSearchedTodo}
        onSetShowInput={setShowInput}
      />
    </div>
  );
};

export default TodoApp;
