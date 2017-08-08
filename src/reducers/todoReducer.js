// @flow
import type {Action} from '../types/Action';

export function todoReducer(state: {}, action: Action) {
  if (state == null) {
    return {};
  }
  switch (action.type) {
    case 'FETCH_TODO_SUCCESS': {
      return {
        ...action.todo,
      };
    }
    case 'RESET_ROUTE': {
      if (action.key === 'todo') {
        return state;
      }
      return {};
    }

    default: return state;
  }
}

export function selectedTodoReducer(state: {}, action: Action) {
  if (state == null) {
    return {};
  }
  switch (action.type) {
    case 'TODO_DETAIL': {
      return action.todoDetailID;
    }
    case 'RESET_ROUTE': {
      return {};
    }

    default: return state;
  }
}
