// @flow

import type {Action} from '../types/Action';
import type {Loaders} from '../types/Loaders';

export default function loadingIndicatorReducer(state: Loaders, action: Action) {
  if (state == null) {
    return {
      isLoginLoading: false,
      isFetchTodoLoading: false,
      isFetchSearchNameLoading: false,
      isFetchPromoLoading: false,
      isFetchNearbyLoading: false,
    };
  } else {
    switch (action.type) {
      case 'FACEBOOK_LOGIN':
      case 'LOGIN': {
        return {
          ...state,
          isLoginLoading: true,
        };
      }
      case 'FACEBOOK_LOGIN_ERROR':
      case 'FACEBOOK_LOGIN_CANCEL':
      case 'LOGOUT_SUCCESS':
      case 'LOGIN_FAILED':
      case 'LOGIN_SUCCESS': {
        return {
          ...state,
          isLoginLoading: false,
        };
      }
      case 'FETCH_TODO': {
        return {
          ...state,
          isFetchTodoLoading: true,
        };
      }
      case 'FETCH_TODO_FAILED':
      case 'FETCH_TODO_SUCCESS': {
        return {
          ...state,
          isFetchTodoLoading: false,
        };
      }
      case 'FETCH_SEARCH_NAME': {
        return {
          ...state,
          isFetchSearchNameLoading: true,
        };
      }
      case 'FETCH_SEARCH_NAME_FAILED':
      case 'FETCH_SEARCH_NAME_SUCCESS': {
        return {
          ...state,
          isFetchSearchNameLoading: false,
        };
      }
      case 'FETCH_PROMO': {
        return {
          ...state,
          isFetchPromoLoading: true,
        };
      }
      case 'FETCH_PROMO_FAILED':
      case 'FETCH_PROMO_SUCCESS': {
        return {
          ...state,
          isFetchPromoLoading: false,
        };
      }
      case 'FETCH_NEARBY': {
        return {
          ...state,
          isFetchNearbyLoading: true,
        };
      }
      case 'FETCH_NEARBY_FAILED':
      case 'FETCH_NEARBY_SUCCESS': {
        return {
          ...state,
          isFetchNearbyLoading: false,
        };
      }

      default: {
        return state;
      }
    }
  }
}
