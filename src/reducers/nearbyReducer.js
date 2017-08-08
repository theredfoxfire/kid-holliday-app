// @flow
import type {Action} from '../types/Action';

export function nearbyReducer(state: {}, action: Action) {
  if (state == null) {
    return {
    };
  }
  switch (action.type) {
    case 'FETCH_NEARBY_SUCCESS': {
      return {
        ...action.nearby,
      };
    }
    case 'RESET_ROUTE': {
      if (action.key === 'nearby') {
        return state;
      }
      return {};
    }

    default: return state;
  }
}

export function selectedNearbyReducer(state: string, action: Action) {
  if (state == null) {
    return '';
  }
  switch (action.type) {
    case 'NEARBY_DETAIL': {
      return action.selectedNearbyID;
    }
    case 'RESET_ROUTE': {
      return {};
    }

    default: return state;
  }
}
