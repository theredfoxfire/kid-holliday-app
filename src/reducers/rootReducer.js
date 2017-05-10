// @flow
import {combineReducers} from 'redux';
import currentUserReducer from './currentUserReducer';
import todoReducer from './todoReducer';
import searchNameReducer from './searchNameReducer';
import navigationReducer from './navigationReducer';
import loadingIndicatorReducer from './loadingIndicatorReducer';
import drawerReducer from './drawerReducer';

export default combineReducers({
  currentUser: currentUserReducer,
  todo: todoReducer,
  searchNameResult: searchNameReducer,
  navigation: navigationReducer,
  loadingIndicator: loadingIndicatorReducer,
  isDrawerOpen: drawerReducer,
});
