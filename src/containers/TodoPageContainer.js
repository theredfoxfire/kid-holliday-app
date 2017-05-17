// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import TodoPage from '../pages/TodoPage';

export function mapStateToProps(state: RootState) {
  return {
    todo: state.todo,
    isFetchTodoLoading: state.loadingIndicator.isFetchTodoLoading,
    isFetchTodoDetailLoading: state.loadingIndicator.isFetchTodoDetailLoading,
    isRemoveTodoLoading: state.loadingIndicator.isRemoveTodoLoading,
    isActionTodoLoading: state.loadingIndicator.isActionTodoLoading,
    isRemoveTodoDone: state.loadingIndicator.isRemoveTodoDone,
    currentUser: state.currentUser,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    todoDetails(id: string, todoType: string) {
      dispatch({type: 'PUSH_ROUTE', key: 'todoDetail'});
      dispatch({type: 'FETCH_TODO_DETAIL', id, todoType});
    },
    fetchTodo(username: string) {
      dispatch({type: 'FETCH_TODO', username: username});
    },
    removeTodo(id: string, username: string) {
      dispatch({type: 'REMOVE_TODO', id, username});
    },
    actionTodo(id: string, action: string, username) {
      dispatch({type: 'ACTION_TODO', id, actionTodo: action, username});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
