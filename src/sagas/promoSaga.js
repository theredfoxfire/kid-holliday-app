// @flow

import {AsyncStorage, ToastAndroid} from 'react-native';
import {put, call, take} from 'redux-saga/effects';

import PromoAPI from '../API/PromoAPI';
import {encrypt} from '../helpers/encryption';

export function* watchPromoSaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('FETCH_PROMO');
    try {
      let result = yield call(PromoAPI.promoList);
      if (result.data.length > 0) {
        yield put({type: 'FETCH_PROMO_SUCCESS', promo: result.data});
      } else {
        throw new Error('Data Promo kosong.');
      }
    } catch (error) {
      yield put({type: 'FETCH_PROMO_FAILED', error});
      ToastAndroid.show(error.message, ToastAndroid.LONG);
      continue;
    }
  }
}
