import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MDPApp from './MDPApp';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mdpReducer from './redux/reducers/mdpReducer.js';
import './index.css';

// create store to hold app's state
const store = createStore( mdpReducer );

// render app wrapper with store connects redux
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <MDPApp />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
