import React from 'react';
import PropTypes from 'prop-types';


export default class ToDo extends React.Component {
  render() {
    return <li onClick={this.props.onClick} style={{
      textDecoration: this.props.completed ? 'line-through' : 'none',
    }}>{this.props.text}</li>;
  }
}

ToDo.propTypes = {
  text: PropTypes.string,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
};
