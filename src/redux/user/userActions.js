import {ADD_TASK, REMOVE_TASK} from './userTypes';

export const addTask = data => {
  return {
    type: ADD_TASK,
    payload: data,
  };
};

export const removeTask = data => {
  return {
    type: REMOVE_TASK,
    payload: data,
  };
};
