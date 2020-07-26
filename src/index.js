import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import rootreducer from './Reducer/RootReducer.js'

const store = configureStore({
	reducer: rootreducer,
})
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  	<Router>
    	<App />
  	</Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
