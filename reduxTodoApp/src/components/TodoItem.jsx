import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodo } from '../actions/todoActions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleUpdate = () => {
    if (isUpdating) {
      const updatedTodo = {
        id: todo.id,
        text: updatedText,
        completed: todo.completed,
      };
      dispatch(updateTodo(updatedTodo));
      setIsUpdating(false);
    } else {
      setIsUpdating(true);
    }
  };

  return (
    <li className={`my-2 ${todo.completed ? 'line-through' : ''}`}>
      {isUpdating ? (
        <input
          className="border p-2 flex-grow mr-2"
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <span className="cursor-pointer" onClick={handleToggle}>
          {todo.text}
        </span>
      )}
      <button
        className={`bg-${isUpdating ? 'green' : 'red'}-500 hover:bg-${isUpdating ? 'green' : 'red'}-700 text-white font-bold py-1 px-2 ml-2 rounded`}
        onClick={handleUpdate}
      >
        {isUpdating ? 'Save' : 'Update'}
      </button>
      {!isUpdating && (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-2 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default TodoItem;
