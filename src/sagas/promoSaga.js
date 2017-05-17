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

export function* watchPromoDetailSaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('FETCH_PROMO_DETAIL');
    try {
      let {id} = action;
      let result = yield call(PromoAPI.promoDetails, id);
      if (result.data.length > 0) {
        yield put({type: 'FETCH_PROMO_DETAIL_SUCCESS', promoDetailResult: result.data[0]});
      } else {
        throw new Error('Data Promo kosong.');
      }
    } catch (error) {
      yield put({type: 'FETCH_PROMO_DETAIL_FAILED', error});
      ToastAndroid.show(error.message, ToastAndroid.LONG);
      continue;
    }
  }
}
