// @flow
import type {Action} from '../types/Action';

export function promoReducer(state: {}, action: Action) {
  if (state == null) {
    return {
    };
  }
  switch (action.type) {
    case 'FETCH_PROMO_SUCCESS': {
      return {
        ...action.promo,
      };
    }
    case 'FETCH_PROMO': {
      return {};
    }

    default: return state;
  }
}

export function selectedPromoReducer(state: string, action: Action) {
  if (state == null) {
    return '';
  }
  switch (action.type) {
    case 'PROMO_DETAIL': {
      return action.selectedPromoID;
    }

    default: return state;
  }
}
