// @flow

import {connect} from 'react-redux';
import BurgerButton from '../core-ui/BurgerButton';
import type {Dispatch} from '../types/Store';
import type {RootState} from '../types/RootState';

type Props = {
  iconButtonName?: string;
  onIconButtonPress?: () => any;
};

export function mapStateToProps(state: RootState, ownProps: Props) {
  let {iconButtonName, onIconButtonPress} = ownProps;
  return {
    iconButtonName,
    onIconButtonPress,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onIconButtonPress() {
      dispatch({
        type: 'OPEN_DRAWER',
        isDrawerOpen: true,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerButton);
