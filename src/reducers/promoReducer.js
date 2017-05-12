// @flow
import type {Action} from '../types/Action';

export default function promoReducer(state: {}, action: Action) {
  if (state == null) {
    return {
      token: '',
    };
  }
  switch (action.type) {
    case 'FETCH_PROMO_SUCCESS': {
      return {
        ...state,
        ...action.promo,
      };
    }
  }
  return state;
}
