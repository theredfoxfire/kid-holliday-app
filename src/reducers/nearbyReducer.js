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
    case 'FETCH_NEARBY': {
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

    default: return state;
  }
}
