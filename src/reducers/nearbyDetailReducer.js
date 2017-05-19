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
    case 'PUSH_ROUTE': {
      if (action.key === 'nearbyDetail') {
        return {};
      }
      return state;
    }

    default: return state;
  }
}
