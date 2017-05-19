// @flow
import type {Action} from '../types/Action';

export default function promoDetailReducer(state: {}, action: Action) {
  if (state == null) {
    return {
    };
  }
  switch (action.type) {
    case 'FETCH_PROMO_DETAIL_SUCCESS': {
      return {
        ...action.promoDetailResult,
      };
    }
    case 'PUSH_ROUTE': {
      if (action.key === 'promoDetail') {
        return {};
      }
      return state;
    }

    default: return state;
  }
}
