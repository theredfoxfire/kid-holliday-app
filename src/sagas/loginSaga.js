// @flow

import {AsyncStorage, ToastAndroid} from 'react-native';
import {put, call, take} from 'redux-saga/effects';

import UserAPI from '../API/UserAPI';
import {encrypt} from '../helpers/encryption';

export function* watchLoginSaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('LOGIN');
    try {
      let {userAuth} = action;
      let result = yield call(UserAPI.postLogin, userAuth);
      if (result.data.length !== 0) {
        yield put({type: 'LOGIN_SUCCESS', currentUser: result.data[0]});
      } else {
        throw new Error('Login gagal! Pastikan username & password Anda benar.');
      }
    } catch (error) {
      yield put({type: 'LOGIN_FAILED', error});
      ToastAndroid.show(error.message, ToastAndroid.LONG);
      continue;
    }
    yield take('LOGOUT_SUCCESS');
  }
}
