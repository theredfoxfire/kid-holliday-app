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
    case 'FETCH_SEARCH_NAME_DETAIL': {
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

    default: return state;
  }
}
