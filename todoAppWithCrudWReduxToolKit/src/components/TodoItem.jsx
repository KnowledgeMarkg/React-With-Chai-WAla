import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, updateTodo } from '../features/todo/todosSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleToggleComplete = () => {
    dispatch(toggleComplete(todo.id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        updatedText,
      })
    );
    setIsEditing(false);
  };

  return (
    <div className="flex items-center mb-2 ml-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
        className="mr-4"
      />
      {isEditing ? (
        <React.Fragment>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            className="mr-2 px-2 py-1 w-3/4 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button onClick={handleSaveClick} className="ml-2 px-2 py-1 bg-green-500 text-white rounded">
            Save
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p className={todo.completed ? 'line-through' : ''} style={{ flexGrow: 1 }}>
            {todo.text}
          </p>
          {!todo.completed && (
            <button onClick={handleEditClick} className="px-2 py-1 bg-blue-500 text-white rounded">
              Edit
            </button>
          )}
        </React.Fragment>
      )}
      <button
        onClick={handleDeleteTodo}
        className="px-2 py-1 bg-red-500 text-white rounded ml-2"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
