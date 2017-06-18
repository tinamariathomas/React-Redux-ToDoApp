import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Wrapper from './../src/components/Wrapper';

import todoApp from './reducers/reducers';

const store = createStore(todoApp);


ReactDOM.render(
  <Provider store={store}>
    <Wrapper/>
    </Provider>,
  document.getElementById('root'));
