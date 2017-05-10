// @flow
import type {Action} from '../types/Action';

export default function searchNameReducer(state: {}, action: Action) {
  if (state == null) {
    return {
      token: '',
    };
  }
  switch (action.type) {
    case 'FETCH_SEARCH_NAME_SUCCESS': {
      return {
        ...state,
        ...action.searchNameResult,
      };
    }
  }
  return state;
}
