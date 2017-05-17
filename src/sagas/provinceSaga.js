// @flow

import {AsyncStorage, ToastAndroid} from 'react-native';
import {put, call, take} from 'redux-saga/effects';

import LocationAPI from '../API/LocationAPI';
import {encrypt} from '../helpers/encryption';

export function* watchProvinceSaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('FETCH_PROVINCE');
    try {
      let result = yield call(LocationAPI.provinceList);
      if (result.data.length > 0) {
        yield put({type: 'FETCH_PROVINCE_SUCCESS', province: result.data});
      } else {
        throw new Error('Data Province kosong.');
      }
    } catch (error) {
      yield put({type: 'FETCH_PROVINCE_FAILED', error});
      ToastAndroid.show(error.message, ToastAndroid.LONG);
      continue;
    }
  }
}

export function* watchCitySaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('FETCH_CITY');
    try {
      let {province} = action;
      let result = yield call(LocationAPI.cityList, province);
      if (result.data.length > 0) {
        yield put({type: 'FETCH_CITY_SUCCESS', city: result.data});
      } else {
        throw new Error('Data City kosong.');
      }
    } catch (error) {
      yield put({type: 'FETCH_CITY_FAILED', error});
      ToastAndroid.show(error.message, ToastAndroid.LONG);
      continue;
    }
  }
}
