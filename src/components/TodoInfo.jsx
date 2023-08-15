import React, { useState } from 'react';

const TodoInfo = ({
  todos,
  onSetShowCompleted,
  onSetSearchedTodo,
  onSetShowInput,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleShowSearchInput = () => {
    setShowSearchInput((is) => !is);
  };

  const todosLeft = todos.filter((todo) => todo.done === false).length;

  return (
    <div className="flex flex-col sm:flex-row-reverse items-center justify-between space-y-5 sm:space-y-0 bg-yellow-100 border-t-2 bg px-7 py-2.5">
      <div className="flex items-center space-x-2.5">
        <button
          onClick={() => onSetShowCompleted(false)}
          className="px-3 py-1 rounded border-2 border-yellow-100 focus:border-yellow-300"
        >
          All
        </button>
        <button
          onClick={() => onSetShowCompleted(true)}
          className="px-3 py-1 rounded border-2 border-yellow-100 focus:border-yellow-300"
        >
          Completed
        </button>
      </div>
      <div className="w-full flex items-center justify-between sm:justify-start sm:divide-x-2 divide-gray-400 space-x-3">
        <div className="flex items-center space-x-3">
          <button onClick={() => onSetShowInput(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          {showSearchInput && (
            <input
              type="text"
              placeholder="Search for todo"
              className="text-sm py-1.5 px-2 rounded outline-none border-2 focus:border-blue-500"
              onChange={(e) => onSetSearchedTodo(e.target.value)}
            />
          )}
          <button
            onClick={() => {
              handleShowSearchInput();
              onSetSearchedTodo('');
            }}
          >
            {showSearchInput ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex items-center space-x-3 pl-3">
          {todos.length === 0
            ? 'No todos yet!'
            : todosLeft === 0
            ? 'All done'
            : `${todosLeft} Items left`}
        </div>
      </div>
    </div>
  );
};

export default TodoInfo;
