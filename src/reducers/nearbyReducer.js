// @flow
import type {Action} from '../types/Action';

export default function nearbyReducer(state: {}, action: Action) {
  if (state == null) {
    return {
      token: '',
    };
  }
  switch (action.type) {
    case 'FETCH_NEARBY_SUCCESS': {
      return {
        ...action.nearby,
      };
    }
  }
  return state;
}
