// @flow
import type {Action} from '../types/Action';

export default function nearbyDetailReducer(state: {}, action: Action) {
  if (state == null) {
    return {
      token: '',
    };
  }
  switch (action.type) {
    case 'FETCH_NEARBY_DETAIL_SUCCESS': {
      return {
        ...state,
        ...action.nearbyDetailResult,
      };
    }
  }
  return state;
}
