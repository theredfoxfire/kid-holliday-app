
import {takeLatest} from 'redux-saga';
import {call, put, select} from 'redux-saga/effects';

import UserAPI from '../API/UserAPI';

function getToken(state) {
  return state.currentUser.token;
}

function* logout() {
  try {
    let token = yield select(getToken);
    yield call(UserAPI.logout, token);
    yield put({type: 'LOGOUT_SUCCESS'});
  } catch (error) {
    // yield put({type: 'LOGOUT_FAILED', error: error});
    yield put({type: 'LOGOUT_SUCCESS'}); // TODO: wait for logout API in backend fixed
  }
}

export function* watchLogoutSaga() {
  const pattern = (action) => {
    let isPushRoute = action.type === 'RESET_ROUTE';
    let isLogout = action.key === 'initial';
    return (isPushRoute && isLogout);
  };
  yield takeLatest(pattern, logout);
}
