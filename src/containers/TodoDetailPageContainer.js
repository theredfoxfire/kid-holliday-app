// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import TodoDetailPage from '../pages/TodoDetailPage';

export function mapStateToProps(state: RootState) {
  return {
    todoDetailResult: state.todoDetailResult,
    isFetchTodoDetailLoading: state.loadingIndicator.isFetchTodoDetailLoading,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    backToTodo: () => {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'todo',
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailPage);
