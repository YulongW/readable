import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './app/utils/configureStore';
import Root from './app/containers/Root';

import './index.css';

const store = configureStore();

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
);

registerServiceWorker();
