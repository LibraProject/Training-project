import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// 引入mobx实例
import {Provider, observer, inject} from 'mobx-react';
import store from './store'
ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
