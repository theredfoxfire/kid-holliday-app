// @flow
import type {Action} from '../types/Action';

export default function todoDetailReducer(state: {}, action: Action) {
  if (state == null) {
    return {
    };
  }
  switch (action.type) {
    case 'FETCH_TODO_DETAIL_SUCCESS': {
      return {
        ...action.todoDetailResult,
      };
    }
    case 'RESET_ROUTE': {
      return {};
    }
    case 'PUSH_ROUTE': {
      return {};
    }

    default: return state;
  }
}
