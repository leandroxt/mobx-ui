import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import TxStore from './store/TxStore';
import App from './components/App';

import './index.less';

/* global document */

const stores = {
  txStore: new TxStore()
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
