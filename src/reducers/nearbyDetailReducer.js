// @flow
import type {Action} from '../types/Action';

export default function nearbyDetailReducer(state: {}, action: Action) {
  if (state == null) {
    return {};
  }
  switch (action.type) {
    case 'FETCH_NEARBY_DETAIL_SUCCESS': {
      return {
        ...action.nearbyDetailResult,
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
