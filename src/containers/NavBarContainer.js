//@flow
import {connect} from 'react-redux';

import {NavBar} from '../core-ui';

function mapStateToProps(state) {
  let {navigation} = state;
  let route = navigation.routes[navigation.routes.length - 1];
  let indexes = ['homepage', 'notifications', 'settings', 'favorites'];
  return {
    selectedIndex: indexes.findIndex((item) => item === route.key),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navigateToHome() {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'homepage',
      });
    },
    navigateToNotif() {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'notifications',
      });
    },
    navigateToSettings() {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'settings',
      });
    },
    navigateToFavorites() {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'favorites',
      });
    },
    onAddItem() {
      dispatch({
        type: 'SHOW_NEW_ITEM_MODAL',
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
