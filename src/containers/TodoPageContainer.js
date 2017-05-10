// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import TodoPage from '../pages/TodoPage';

export function mapStateToProps(state: RootState) {
  return {
    todo: state.todo,
    isFetchTodoLoading: state.loadingIndicator.isFetchTodoLoading,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    todoDetails() {
      dispatch({type: 'PUSH_ROUTE', key: 'todoDetail'});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
