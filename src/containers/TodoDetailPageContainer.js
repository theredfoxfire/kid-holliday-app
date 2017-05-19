// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import TodoDetailPage from '../pages/TodoDetailPage';

export function mapStateToProps(state: RootState) {
  return {
    todoDetailResult: state.todoDetailResult,
    isFetchTodoDetailLoading: state.loadingIndicator.isFetchTodoDetailLoading,
    todoDetailID: state.todoDetailID,
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
    fetchDetail(id: string, todoType: string) {
      dispatch({type: 'FETCH_TODO_DETAIL', id, todoType});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailPage);
