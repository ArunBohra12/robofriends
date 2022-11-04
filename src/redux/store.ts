import { Dispatch } from 'react';

import { createStore, applyMiddleware, Store, Middleware, AnyAction } from 'redux';

import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const logger: Middleware = createLogger();

let store: Store;

const middlewares: Middleware<Dispatch<AnyAction>>[] = [thunkMiddleware];

if (import.meta.env.DEV) {
  middlewares.push(logger);
  store = createStore(rootReducer, applyMiddleware(...middlewares));
} else {
  store = createStore(rootReducer, applyMiddleware(...middlewares));
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
