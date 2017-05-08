import React from 'react';
import VisibleTodoList from '../containers/visibleToDoList';
import AddTodo from '../containers/AddToDo';
import Footer from './Footer';

export default class Wrapper extends React.Component {
  render() {
    return (<div>
              <AddTodo/>
              <VisibleTodoList/>
              <Footer/>
            </div>);
  }
}