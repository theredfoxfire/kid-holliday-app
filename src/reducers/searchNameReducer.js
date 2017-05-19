// @flow
import type {Action} from '../types/Action';

export default function searchNameReducer(state: {}, action: Action) {
  if (state == null) {
    return {
    };
  }
  switch (action.type) {
    case 'FETCH_SEARCH_NAME_SUCCESS': {
      return {
        ...action.searchNameResult,
      };
    }
    case 'PUSH_ROUTE': {
      if (action.key === 'place') {
        return {};
      }
      return state;
    }

    default: return state;
  }
}
