// @flow
import {combineReducers} from 'redux';
import currentUserReducer from './currentUserReducer';
import todoReducer from './todoReducer';
import promoReducer from './promoReducer';
import nearbyReducer from './nearbyReducer';
import searchNameReducer from './searchNameReducer';
import navigationReducer from './navigationReducer';
import loadingIndicatorReducer from './loadingIndicatorReducer';
import drawerReducer from './drawerReducer';

export default combineReducers({
  isDrawerOpen: drawerReducer,
  currentUser: currentUserReducer,
  todo: todoReducer,
  promo: promoReducer,
  nearby: nearbyReducer,
  searchNameResult: searchNameReducer,
  navigation: navigationReducer,
  loadingIndicator: loadingIndicatorReducer,
});
