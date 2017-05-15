// @flow
import type {Action} from '../types/Action';

export default function searchNameDetailReducer(state: {}, action: Action) {
  if (state == null) {
    return {
      token: '',
    };
  }
  switch (action.type) {
    case 'FETCH_SEARCH_NAME_DETAIL_SUCCESS': {
      return {
        ...state,
        ...action.searchNameDetailResult,
      };
    }
  }
  return state;
}
