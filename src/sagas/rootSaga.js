// @flow
import {fork} from 'redux-saga/effects';

import {watchLoginSaga} from './loginSaga';
import {watchLogoutSaga} from './logoutSaga';
import {watchSearchNameSaga} from './searchNameSaga';
import {watchTodoSaga} from './todoSaga';

export default function* rootSaga(): any {
  yield fork(watchLoginSaga);
  yield fork(watchLogoutSaga);
  yield fork(watchSearchNameSaga);
  yield fork(watchTodoSaga);
}
