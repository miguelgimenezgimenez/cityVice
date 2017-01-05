import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'semantic-ui-css/semantic.min.css';
import reducers from './redux/reducers';
import App from './App';
import './index.css';
import apiMiddleWare from './redux/apiMiddleWare';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(apiMiddleWare)));
  

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
