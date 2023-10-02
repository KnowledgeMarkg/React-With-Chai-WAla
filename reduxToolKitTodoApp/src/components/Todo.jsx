import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import 'font-awesome/css/font-awesome.min.css';

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editedTodos, setEditedTodos] = useState({});

  const handleEditChange = (e, todoId) => {
    setEditedTodos((prevState) => ({
      ...prevState,
      [todoId]: e.target.value,
    }));
  };

  const handleEditSave = (todoId) => {
    if (editedTodos[todoId]) {
      dispatch(updateTodo({
        id: todoId,
        newText: editedTodos[todoId],
      }));
      setEditedTodos((prevState) => ({
        ...prevState,
        [todoId]: '',
      }));
    }
  };

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {!editedTodos[todo.id] ? (
              <div className="text-white">{todo.text}</div>
            ) : (
              <input
                type="text"
                value={editedTodos[todo.id]}
                onChange={(e) => handleEditChange(e, todo.id)}
                className="bg-transparent text-white outline-none w-full"
              />
            )}
            <div className='flex '>
              {!editedTodos[todo.id] ? (
                <button
                  onClick={() => setEditedTodos((prevState) => ({
                    ...prevState,
                    [todo.id]: todo.text,
                  }))}
                  className="text-white bg-blue-500 border-0 py-1 px-4 mr-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                >
                  <i className="fa fa-pencil"></i>
                </button>
              ) : (
                <button
                  onClick={() => handleEditSave(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 mr-4  focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  <i className="fa fa-check"></i>
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
