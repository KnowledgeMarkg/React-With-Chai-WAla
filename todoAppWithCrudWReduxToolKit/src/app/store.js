import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todo/todosSlice';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: persistedState, // Move this line outside of the reducer object
});

store.subscribe(() => {
  saveState({
    todos: store.getState().todos, // Save only the relevant part of the state
  });
});

export default store;
