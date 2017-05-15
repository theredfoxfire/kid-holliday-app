// @flow
import {combineReducers} from 'redux';
import currentUserReducer from './currentUserReducer';
import todoReducer from './todoReducer';
import promoReducer from './promoReducer';
import nearbyReducer from './nearbyReducer';
import nearbyDetailReducer from './nearbyDetailReducer';
import searchNameReducer from './searchNameReducer';
import searchNameDetailReducer from './searchNameDetailReducer';
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
  searchNameDetailResult: searchNameDetailReducer,
  nearbyDetailResult: nearbyDetailReducer,
  navigation: navigationReducer,
  loadingIndicator: loadingIndicatorReducer,
});
