// @flow
import type {Action} from '../types/Action';

export function searchNameDetailReducer(state: {}, action: Action) {
  if (state == null) {
    return {};
  }
  switch (action.type) {
    case 'FETCH_SEARCH_NAME_DETAIL_SUCCESS': {
      return {
        ...action.searchNameDetailResult,
      };
    }
    case 'RESET_ROUTE': {
      return {};
    }
    case 'PUSH_ROUTE': {
      return {};
    }

    default: return state;
  }
}

export function selectedPlaceReducer(state: string, action: Action) {
  if (state == null) {
    return '';
  }
  switch (action.type) {
    case 'SEARCH_NAME_DETAIL': {
      return action.placeDetailID;
    }
    case 'RESET_ROUTE': {
      return {};
    }

    default: return state;
  }
}
