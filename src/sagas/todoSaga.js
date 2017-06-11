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
        throw new Error('Data Todo kosong.');
      }
    } catch (error) {
      yield put({type: 'FETCH_TODO_FAILED', error});
      ToastAndroid.showWithGravity(error.message, ToastAndroid.LONG, ToastAndroid.CENTER);
      continue;
    }
  }
}

export function* watchTodoDetailSaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('FETCH_TODO_DETAIL');
    try {
      let {id, todoType} = action;
      let result = yield call(TodoAPI.todoDetails, id, todoType);
      if (result.data) {
        yield put({type: 'FETCH_TODO_DETAIL_SUCCESS', todoDetailResult: result.data});
      } else {
        throw new Error('Data Todo kosong.');
      }
    } catch (error) {
      yield put({type: 'FETCH_TODO_DETAIL_FAILED', error});
      ToastAndroid.showWithGravity(error.message, ToastAndroid.LONG, ToastAndroid.CENTER);
      continue;
    }
  }
}

export function* watchNewTodoSaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('POST_NEW_TODO');
    try {
      let {module, module_id, user} = action;
      let result = yield call(TodoAPI.addTodo, module, module_id, user);
      yield put({type: 'POST_NEW_TODO_SUCCESS'});
      ToastAndroid.showWithGravity('Add new Todo success', ToastAndroid.LONG, ToastAndroid.CENTER);
    } catch (error) {
      yield put({type: 'POST_NEW_TODO_FAILED', error});
      ToastAndroid.showWithGravity(error.message, ToastAndroid.LONG, ToastAndroid.CENTER);
      continue;
    }
  }
}

export function* watchRemoveTodoSaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('REMOVE_TODO');
    try {
      let {id, username} = action;
      let result = yield call(TodoAPI.removeTodo, id, username);
      yield put({type: 'ACTION_TODO_SUCCESS'});
      if (result.data.length > 0) {
        yield put({type: 'FETCH_TODO_SUCCESS', todo: result.data});
      } else {
        throw new Error('Data Todo kosong.');
      }
      yield put({type: 'REMOVE_TODO_SUCCESS'});
      ToastAndroid.showWithGravity('Remove Todo success', ToastAndroid.LONG, ToastAndroid.CENTER);
    } catch (error) {
      yield put({type: 'REMOVE_TODO_FAILED', error});
      ToastAndroid.showWithGravity(error.message, ToastAndroid.LONG, ToastAndroid.CENTER);
      // ToastAndroid.showWithGravity('Remove Todo success', ToastAndroid.LONG, ToastAndroid.CENTER);
      continue;
    }
  }
}

export function* watchActionTodoSaga(): any {
  while (true) { //eslint-disable-line
    let action = yield take('ACTION_TODO');
    try {
      let {id, actionTodo, username} = action;
      let result = yield call(TodoAPI.actionTodo, id, actionTodo, username);
      yield put({type: 'ACTION_TODO_SUCCESS'});
      if (result.data.length > 0) {
        yield put({type: 'FETCH_TODO_SUCCESS', todo: result.data});
      } else {
        throw new Error('Data Todo kosong.');
      }
      ToastAndroid.showWithGravity('Update Todo success', ToastAndroid.LONG, ToastAndroid.CENTER);
    } catch (error) {
      yield put({type: 'ACTION_TODO_FAILED', error});
      ToastAndroid.showWithGravity(error.message, ToastAndroid.LONG, ToastAndroid.CENTER);
      // ToastAndroid.showWithGravity('Update Todo success', ToastAndroid.LONG, ToastAndroid.CENTER);
      continue;
    }
  }
}
