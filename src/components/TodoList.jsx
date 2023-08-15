import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  onToggleTodo,
  showCompleted,
  searchedTodos,
  onDelete,
  onSetShowEditInput,
}) => {
  const completedTodos = todos.filter((todo) => todo.done === true);

  return (
    <ul className="max-h-[20rem] overflow-y-scroll px-5 divide-y">
      {todos.length === 0 ? (
        <h1 className="text-center text-3xl text-blue-500 py-5">
          No Todos Yet!
        </h1>
      ) : showCompleted ? (
        completedTodos.length === 0 ? (
          <h2 className="text-center my-3">Any todo has been completed yet!</h2>
        ) : (
          completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleTodo={onToggleTodo}
              showCompleted={showCompleted}
            />
          ))
        )
      ) : searchedTodos.length === 0 ? (
        <h2 className="text-center my-3">No search result!</h2>
      ) : (
        searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleTodo={onToggleTodo}
            showCompleted={showCompleted}
            onDelete={onDelete}
            onSetShowEditInput={onSetShowEditInput}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
