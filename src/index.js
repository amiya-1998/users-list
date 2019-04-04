import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Create store
const store = createStore(reducers, applyMiddleware(reduxThunk, logger));

ReactDOM.render(
  // Render App component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
