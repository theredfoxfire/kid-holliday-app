// @flow
import {combineReducers} from 'redux';
import currentUserReducer from './currentUserReducer';
import provinceReducer from './provinceReducer';
import cityReducer from './cityReducer';
import placeByCityReducer from './placeByCityReducer';
import {todoReducer, selectedTodoReducer} from './todoReducer';
import todoDetailReducer from './todoDetailReducer';
import {promoReducer, selectedPromoReducer} from './promoReducer';
import promoDetailReducer from './promoDetailReducer';
import {nearbyReducer, selectedNearbyReducer} from './nearbyReducer';
import nearbyDetailReducer from './nearbyDetailReducer';
import searchNameReducer from './searchNameReducer';
import {searchNameDetailReducer, selectedPlaceReducer} from './searchNameDetailReducer';
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
  placeByCityResult: placeByCityReducer,
  placeDetailID: selectedPlaceReducer,
  todoDetailID: selectedTodoReducer,
  selectedNearbyID: selectedNearbyReducer,
  selectedPromoID: selectedPromoReducer,
  loadingIndicator: loadingIndicatorReducer,
});
