import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const [todoToUpdate, setTodoToUpdate] = useState(null);

  const handleEdit = (todo) => {
    setTodoToUpdate(todo);
  };

  return (
    <div>
      {/* <TodoForm todoToUpdate={todoToUpdate} /> */}
      <ul className="mt-4 text-violet-700">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onEdit={handleEdit} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
