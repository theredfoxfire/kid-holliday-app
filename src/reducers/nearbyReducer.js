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
    case 'PUSH_ROUTE': {
      if (action.key === 'nearby') {
        return {};
      }
      return state;
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

    default: return state;
  }
}
