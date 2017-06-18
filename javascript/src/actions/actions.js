export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ADD_TO_DO = 'ADD_TO_DO';
export const TOGGLE_TO_DO = 'TOGGLE_TO_DO';

let todoCount = 0;

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export function addNewToDo(text) {
  todoCount += 1;
  return { id: todoCount, type: ADD_TO_DO, text };
}

export function toggleTodo(id) {
  return { id, type: TOGGLE_TO_DO };
}
