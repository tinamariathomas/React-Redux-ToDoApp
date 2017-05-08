import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TO_DO } from './../actions/actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case ADD_TO_DO:
      return Object.assign({}, state,{
        todos:[...state.todos,{id: action.id, text:action.text, completed:false}]
      });
    default:
      return state
  }
}

export default todoApp
