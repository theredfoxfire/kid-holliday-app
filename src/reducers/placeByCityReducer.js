// @flow
import type {Action} from '../types/Action';

export default function placeByCityReducer(state: {}, action: Action) {
  if (state == null) {
    return {
      token: '',
    };
  }
  switch (action.type) {
    case 'FETCH_PLACE_BY_CITY_SUCCESS': {
      return {
        ...action.placeByCityResult,
      };
    }

    default: return state;
  }
}
