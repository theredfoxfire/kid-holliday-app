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
      isActionTodoLoading: false,
      isFetchProvinceLoading: false,
      isFetchCityLoading: false,
      isFetchPlaceByCity: false,
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
      case 'PUSH_ROUTE': {
        if (action.key === 'nearbyDetail') {
          return {
            ...state,
            isFetchNearbyDetailLoading: true,
          };
        }
        if (action.key === 'todoDetail') {
          return {
            ...state,
            isFetchTodoDetailLoading: true,
          };
        }
        if (action.key === 'placeDetail') {
          return {
            ...state,
            isFetchSearchNameDetaiLoading: true,
          };
        }
        if (action.key === 'promoDetail') {
          return {
            ...state,
            isFetchPromoDetailLoading: true,
          };
        }
        return state;
      }
      case 'RESET_ROUTE': {
        if (action.key === 'places') {
          return {
            ...state,
            isFetchSearchNameLoading: true,
          };
        }
        return state;
      }
      case 'GOTO_TODO': {
        return {
          ...state,
          isFetchTodoLoading: true,
        };
      }
      case 'GOTO_PROMO': {
        return {
          ...state,
          isFetchPromoLoading: true,
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
      case 'FETCH_PROVINCE': {
        return {
          ...state,
          isFetchProvinceLoading: true,
        };
      }
      case 'FETCH_PROVINCE_FAILED':
      case 'FETCH_PROVINCE_SUCCESS': {
        return {
          ...state,
          isFetchProvinceLoading: false,
        };
      }
      case 'FETCH_CITY': {
        return {
          ...state,
          isFetchCityLoading: true,
        };
      }
      case 'FETCH_CITY_FAILED':
      case 'FETCH_CITY_SUCCESS': {
        return {
          ...state,
          isFetchCityLoading: false,
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
      case 'ACTION_TODO': {
        return {
          ...state,
          isActionTodoLoading: true,
        };
      }
      case 'ACTION_TODO_FAILED':
      case 'ACTION_TODO_SUCCESS': {
        return {
          ...state,
          isActionTodoLoading: false,
        };
      }
      case 'FETCH_PLACE_BY_CITY': {
        return {
          ...state,
          isFetchPlaceByCity: true,
        };
      }
      case 'FETCH_PLACE_BY_CITY_FAILED':
      case 'FETCH_PLACE_BY_CITY_SUCCESS': {
        return {
          ...state,
          isFetchPlaceByCity: false,
        };
      }

      default: {
        return state;
      }
    }
  }
}
