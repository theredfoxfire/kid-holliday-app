// @flow
import {combineReducers} from 'redux';
import currentUserReducer from './currentUserReducer';
import navigationReducer from './navigationReducer';
import loadingIndicatorReducer from './loadingIndicatorReducer';
import drawerReducer from './drawerReducer';

export default combineReducers({
  currentUser: currentUserReducer,
  navigation: navigationReducer,
  loadingIndicator: loadingIndicatorReducer,
  isDrawerOpen: drawerReducer,
});
