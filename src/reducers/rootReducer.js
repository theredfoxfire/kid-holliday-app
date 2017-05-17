// @flow
import {combineReducers} from 'redux';
import currentUserReducer from './currentUserReducer';
import provinceReducer from './provinceReducer';
import cityReducer from './cityReducer';
import todoReducer from './todoReducer';
import todoDetailReducer from './todoDetailReducer';
import promoReducer from './promoReducer';
import promoDetailReducer from './promoDetailReducer';
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
  todoDetailResult: todoDetailReducer,
  promo: promoReducer,
  promoDetailResult: promoDetailReducer,
  nearby: nearbyReducer,
  searchNameResult: searchNameReducer,
  searchNameDetailResult: searchNameDetailReducer,
  nearbyDetailResult: nearbyDetailReducer,
  navigation: navigationReducer,
  province: provinceReducer,
  city: cityReducer,
  loadingIndicator: loadingIndicatorReducer,
});
