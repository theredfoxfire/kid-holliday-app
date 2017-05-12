// @flow

import {AsyncStorage, ToastAndroid} from 'react-native';
import {put, call, take} from 'redux-saga/effects';

import SearchAPI from '../API/SearchAPI';
import {encrypt} from '../helpers/encryption';

export function* watchSearchNameSaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('FETCH_SEARCH_NAME');
    try {
      let {name} = action;
      let result = yield call(SearchAPI.searchName, name);
      if (result.data.length > 0) {
        yield put({type: 'FETCH_SEARCH_NAME_SUCCESS', searchNameResult: result.data[0]});
      } else {
        throw new Error('Data Places kosong.');
      }
    } catch (error) {
      yield put({type: 'FETCH_SEARCH_NAME_FAILED', error});
      ToastAndroid.show(error.message, ToastAndroid.LONG);
      continue;
    }
  }
}
