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
    case 'RESET_ROUTE': {
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
    case 'RESET_ROUTE': {
      if (action.key === 'promo') {
        return state;
      }
      return {};
    }

    default: return state;
  }
}
