// @flow
import type {Action} from '../types/Action';

export default function todoDetailReducer(state: {}, action: Action) {
  if (state == null) {
    return {
      token: '',
    };
  }
  switch (action.type) {
    case 'FETCH_TODO_DETAIL_SUCCESS': {
      return {
        ...state,
        ...action.todoDetailResult,
      };
    }

    default: return state;
  }
}
