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
    case 'RESET_ROUTE': {
      if (action.key === 'places') {
        return state;
      }
      return {};
    }

    default: return state;
  }
}
