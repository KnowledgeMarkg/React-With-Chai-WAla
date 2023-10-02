import {configureStore} from '@reduxjs/toolkit'
import todoReducer  from '../features/todo/todoSlice'
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();
export const store = configureStore({
    reducer: todoReducer,
    preloadedState: persistedState,
  });
  

store.subscribe(() => {
    saveState(store.getState());
  });
