// @flow
/* global window */
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

let sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
      ),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
