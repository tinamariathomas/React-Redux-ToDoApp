import React, { PropTypes } from 'react'


export default class ToDo extends React.Component {
  render() {
    return <li  style={{
      textDecoration: this.props.completed ? 'line-through' : 'none'
    }}>{this.props.text}</li>
  }
}

ToDo.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool
};