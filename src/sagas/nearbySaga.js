// @flow

import {AsyncStorage, ToastAndroid} from 'react-native';
import {put, call, take} from 'redux-saga/effects';

import NearbyAPI from '../API/NearbyAPI';
import SearchAPI from '../API/SearchAPI';
import {encrypt} from '../helpers/encryption';

export function* watchNearbySaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('FETCH_NEARBY');
    try {
      let {latLong} = action;
      let result = yield call(NearbyAPI.nearbyList, latLong);
      if (result.loc.length > 0) {
        yield put({type: 'FETCH_NEARBY_SUCCESS', nearby: result.loc});
      } else {
        throw new Error('Data Nearby kosong.');
      }
    } catch (error) {
      yield put({type: 'FETCH_NEARBY_FAILED', error});
      ToastAndroid.showWithGravity(error.message, ToastAndroid.LONG, ToastAndroid.CENTER);
      continue;
    }
  }
}

export function* watchNearbyDetailSaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('FETCH_NEARBY_DETAIL');
    try {
      let {id} = action;
      let result = yield call(SearchAPI.searchNameDetail, id);
      if (result.data.length > 0) {
        yield put({type: 'FETCH_NEARBY_DETAIL_SUCCESS', nearbyDetailResult: result.data[0]});
      } else {
        throw new Error('Data Nearby kosong.');
      }
    } catch (error) {
      yield put({type: 'FETCH_NEARBY_DETAIL_FAILED', error});
      ToastAndroid.showWithGravity(error.message, ToastAndroid.LONG, ToastAndroid.CENTER);
      continue;
    }
  }
}
