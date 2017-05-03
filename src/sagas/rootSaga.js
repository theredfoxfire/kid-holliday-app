// @flow
import {fork} from 'redux-saga/effects';

import {watchLoginSaga} from './loginSaga';
import {watchLogoutSaga} from './logoutSaga';

export default function* rootSaga(): any {
  yield fork(watchLoginSaga);
  yield fork(watchLogoutSaga);
}
