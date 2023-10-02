// todoActions.js

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from './types';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
};
