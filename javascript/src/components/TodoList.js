import React, { PropTypes } from 'react'
import Todo from './todo'

export default class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
          />
        )}
      </ul>
    )
  }
}


ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
};