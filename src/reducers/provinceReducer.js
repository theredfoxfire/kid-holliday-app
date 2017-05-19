// @flow
import type {Action} from '../types/Action';

export default function provinceReducer(state: {}, action: Action) {
  if (state == null) {
    return {
      token: '',
    };
  }
  switch (action.type) {
    case 'FETCH_PROVINCE_SUCCESS': {
      return {
        ...action.province,
      };
    }

    default: return state;
  }
}
