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
    case 'FETCH_SEARCH_NAME': {
      return {};
    }

    default: return state;
  }
}
