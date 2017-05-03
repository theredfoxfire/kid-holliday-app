import {AsyncStorage, ToastAndroid} from 'react-native';
import {put, call, take} from 'redux-saga/effects';

import UserAPI from '../API/UserAPI';
import {encrypt} from '../helpers/encryption';

import formatToCamelCase from '../helpers/formatToCamelCase';

export function* watchLoginSaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('LOGIN');
    try {
      let {userAuth} = action;
      let result = yield call(UserAPI.postLogin, userAuth);
      if (result.result === 'sukses') {
        let camelCasedResult = yield call(formatToCamelCase, result.data);
        camelCasedResult.coins = camelCasedResult.totalPoint;
        camelCasedResult.experience = camelCasedResult.levelPoint;
        camelCasedResult.level = camelCasedResult.levelID;
        camelCasedResult.name = camelCasedResult.firstName;
        camelCasedResult.token = camelCasedResult.apiToken;
        yield put({type: 'LOGIN_SUCCESS', currentUser: camelCasedResult});
        yield call(AsyncStorage.multiSet, [
          ['@email', userAuth.email],
          ['@password', encrypt(userAuth.password)],
          ['@isLogin', 'yes'],
        ]);
        yield put({type: 'FETCH_NEWS_REQUESTED'});
        try {
          let result = yield call(AsyncStorage.getItem, '@favorites');
          if (result != null) {
            let favorites = JSON.parse(result);
            yield put({type: 'INIT_FAVORITES', favorites});
          }
        } catch (error) {
          yield put({type: 'INIT_FAVORITES_FAILED', error});
        }
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      yield put({type: 'LOGIN_FAILED', error});
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
      continue;
    }
    yield take('LOGOUT_SUCCESS');
    yield call(AsyncStorage.setItem, '@isLogin', 'no');
  }
}
