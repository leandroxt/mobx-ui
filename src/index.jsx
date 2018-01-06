import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import Store from './store';
import App from './components/App';

import './index.less';

/* global document */

const stores = {
  txStore: new Store()
};

const app = (
  <Provider {...stores}>
    <App />
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
