// @flow
import {fork} from 'redux-saga/effects';

import {watchLoginSaga} from './loginSaga';
import {watchLogoutSaga} from './logoutSaga';
import {watchSearchNameSaga, watchSearchNameDetailSaga} from './searchNameSaga';
import {watchTodoSaga} from './todoSaga';
import {watchPromoSaga} from './promoSaga';
import {watchNearbySaga, watchNearbyDetailSaga} from './nearbySaga';

export default function* rootSaga(): any {
  yield fork(watchLoginSaga);
  yield fork(watchLogoutSaga);
  yield fork(watchSearchNameSaga);
  yield fork(watchSearchNameDetailSaga);
  yield fork(watchTodoSaga);
  yield fork(watchPromoSaga);
  yield fork(watchNearbySaga);
  yield fork(watchNearbyDetailSaga);
}
