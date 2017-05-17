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
      isFetchSearchNameDetailLoading: false,
      isFetchNearbyDetailLoading: false,
      isFetchTodoDetailLoading: false,
      isFetchPromoDetailLoading: false,
      isPostTodoLoading: false,
      isRemoveTodoLoading: false,
      isRemoveTodoDone: false,
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
      case 'FETCH_TODO_DETAIL': {
        return {
          ...state,
          isFetchTodoDetailLoading: true,
        };
      }
      case 'FETCH_TODO_DETAIL_FAILED':
      case 'FETCH_TODO_DETAIL_SUCCESS': {
        return {
          ...state,
          isFetchTodoDetailLoading: false,
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
      case 'FETCH_SEARCH_NAME_DETAIL': {
        return {
          ...state,
          isFetchSearchNameDetailLoading: true,
        };
      }
      case 'FETCH_SEARCH_NAME_DETAIL_FAILED':
      case 'FETCH_SEARCH_NAME_DETAIL_SUCCESS': {
        return {
          ...state,
          isFetchSearchNameDetailLoading: false,
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
      case 'FETCH_PROMO_DETAIL': {
        return {
          ...state,
          isFetchPromoDetailLoading: true,
        };
      }
      case 'FETCH_PROMO_DETAIL_FAILED':
      case 'FETCH_PROMO_DETAIL_SUCCESS': {
        return {
          ...state,
          isFetchPromoDetailLoading: false,
        };
      }
      case 'POST_NEW_TODO': {
        return {
          ...state,
          isPostTodoLoading: true,
        };
      }
      case 'POST_NEW_TODO_FAILED':
      case 'POST_NEW_TODO_SUCCESS': {
        return {
          ...state,
          isPostTodoLoading: false,
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
      case 'FETCH_NEARBY_DETAIL': {
        return {
          ...state,
          isFetchNearbyDetailLoading: true,
        };
      }
      case 'FETCH_NEARBY_DETAIL_FAILED':
      case 'FETCH_NEARBY_DETAIL_SUCCESS': {
        return {
          ...state,
          isFetchNearbyDetailLoading: false,
        };
      }
      case 'REMOVE_TODO': {
        return {
          ...state,
          isRemoveTodoLoading: true,
          isRemoveTodoDone: false,
        };
      }
      case 'REMOVE_TODO_FAILED':
      case 'REMOVE_TODO_SUCCESS': {
        return {
          ...state,
          isRemoveTodoLoading: false,
          isRemoveTodoDone: true,
        };
      }

      default: {
        return state;
      }
    }
  }
}
