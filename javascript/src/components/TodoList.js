import React, { PropTypes } from 'react';
import Todo from './ToDo';

export default class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick = {() => { this.props.onTodoClick(todo.id); }}
          />,
        )}
      </ul>
    );
  }
}


ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onTodoClick: PropTypes.func.isRequired,
  }).isRequired).isRequired,
};
