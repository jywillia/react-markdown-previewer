// import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// import css style sheet
import './index.css';

// import app wrapper
import MDPApp from './MDPApp';

// default service worker
import * as serviceWorker from './serviceWorker';

// import redux dependencies
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import reducer functions
import mdpReducer from './redux/reducers/mdpReducer.js';


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
