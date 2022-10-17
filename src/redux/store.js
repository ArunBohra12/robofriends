import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const logger = createLogger();

let store;

const middlewares = [thunkMiddleware];

if (import.meta.env.DEV) {
  middlewares.push(logger);
  store = createStore(rootReducer, applyMiddleware(...middlewares));
} else {
  store = createStore(rootReducer, applyMiddleware(...middlewares));
}

export default store;
