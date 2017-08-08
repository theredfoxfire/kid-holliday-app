// @flow
import type {Action} from '../types/Action';

export default function cityReducer(state: {}, action: Action) {
  if (state == null) {
    return {
      token: '',
    };
  }
  switch (action.type) {
    case 'FETCH_CITY_SUCCESS': {
      return {
        ...action.city,
      };
    }

    default: return state;
  }
}
