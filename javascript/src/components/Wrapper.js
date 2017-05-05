import React from 'react';
import ToDoList from './todolist';
import VisibleTodoList from '../containers/visibleToDoList'
import Footer from './Footer';

export default class Wrapper extends React.Component {
  render() {

    return (<div>
              <VisibleTodoList/>
              <Footer/>
            </div>);
  }
}