// @flow
import type {Action} from '../types/Action';

export default function todoReducer(state: {}, action: Action) {
  if (state == null) {
    return {
      token: '',
    };
  }
  switch (action.type) {
    case 'FETCH_TODO_SUCCESS': {
      return {
        ...state,
        ...action.todo,
      };
    }
  }
  return state;
}
