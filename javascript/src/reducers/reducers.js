import { VisibilityFilters, SET_VISIBILITY_FILTER } from './../actions/actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [{
    id:1,
    text:"Hi",
    completed:true
  },{
    id:2,
    text:"Hello",
    completed:false
  }
  ]
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
    default:
      return state
  }
}

export default todoApp
