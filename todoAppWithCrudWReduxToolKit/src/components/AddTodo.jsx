import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../features/todo/todosSlice';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      dispatch(
        addTodo({
          id: nanoid(),
          text: inputValue,
          completed: false,
        })
      );
      setInputValue('');
    }
  };

  return (
    <>
      <form onSubmit={handleAddTodo} className="space-x-3 mt-12 flex justify-center mb-8 rounded-md">
        <input
          type="text"
          className="w-3/4 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={inputValue}
        onChange={handleInputChange}
        />
        <button type="submit" className="text-white ml-4 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Add Todo
        </button>
      </form>
    </>
   
  );
};

export default AddTodo;
