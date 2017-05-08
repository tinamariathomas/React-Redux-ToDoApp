export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ADD_TO_DO = 'ADD_TO_DO';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function addNewToDo(text){
  return{ type: ADD_TO_DO, text}
}