import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store';

import App from './App';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter basename="/project-react-3-HongJungKim-dev">
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
