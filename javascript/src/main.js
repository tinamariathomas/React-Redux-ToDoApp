import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './../src/components/wrapper.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/reducers';

let store = createStore(todoApp);


ReactDOM.render(
  <Provider store={store}>
    <Wrapper/>
    </Provider>,
  document.getElementById('root'));