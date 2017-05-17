// @flow
import type {Action} from '../types/Action';

export default function promoDetailReducer(state: {}, action: Action) {
  if (state == null) {
    return {
      token: '',
    };
  }
  switch (action.type) {
    case 'FETCH_PROMO_DETAIL_SUCCESS': {
      return {
        ...state,
        ...action.promoDetailResult,
      };
    }
  }
  return state;
}
