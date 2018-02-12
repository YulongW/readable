import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import logger from 'redux-logger';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [ logger ];

const configureStore = () => {
  const store = createStore(
    reducers,
    composeEnhancer(
      applyMiddleware(...middleWares)
    )
  );
  return store;
}

export default configureStore;