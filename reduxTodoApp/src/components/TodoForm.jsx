import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, updateTodo } from '../actions/todoActions';

const TodoForm = ({ todoToUpdate }) => {
  const [text, setText] = useState(todoToUpdate ? todoToUpdate.text : '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(todoToUpdate) {
      const updatedTodo = {
        id: todoToUpdate.id,
        text,
        completed: todoToUpdate.completed
      };
      dispatch(updateTodo(updatedTodo));
    } else {
      const newTodo = {
        id: uuidv4(),
        text,
        completed: false
      };
      dispatch(addTodo(newTodo));
    }
    
    setText('');
  };

  return (
    <form className="my-4 flex" onSubmit={handleSubmit}>
      <input
        className="border p-2 flex-grow mr-2"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
        {todoToUpdate ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

export default TodoForm;
