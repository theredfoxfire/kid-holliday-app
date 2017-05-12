// @flow

import {AsyncStorage, ToastAndroid} from 'react-native';
import {put, call, take} from 'redux-saga/effects';

import NearbyAPI from '../API/NearbyAPI';
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
      ToastAndroid.show(error.message, ToastAndroid.LONG);
      continue;
    }
  }
}
