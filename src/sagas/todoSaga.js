// @flow

import {AsyncStorage, ToastAndroid} from 'react-native';
import {put, call, take} from 'redux-saga/effects';

import TodoAPI from '../API/TodoAPI';
import {encrypt} from '../helpers/encryption';

export function* watchTodoSaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('FETCH_TODO');
    try {
      let {username} = action;
      let result = yield call(TodoAPI.todoList, username);
      if (result.data.length > 0) {
        yield put({type: 'FETCH_TODO_SUCCESS', todo: result.data});
      } else {
        throw new Error('Fetch data Todo gagal.');
      }
    } catch (error) {
      yield put({type: 'FETCH_TODO_FAILED', error});
      ToastAndroid.show(error.message, ToastAndroid.LONG);
      continue;
    }
  }
}
