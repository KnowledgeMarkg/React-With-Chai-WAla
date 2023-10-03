import { createSlice } from '@reduxjs/toolkit';


const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
        const { id, updatedText } = action.payload;
        const todo = state.find((todo) => todo.id === id);
        if (todo) {
          todo.text = updatedText;
        }
      },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
