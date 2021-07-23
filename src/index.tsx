import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import counterReducer from './reducer/counterReducer';
import '@fontsource/roboto';



const store = createStore(
  counterReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  console.log(store.getState())
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,

  document.getElementById('root')
);


