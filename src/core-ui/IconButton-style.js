// @flow

import {StyleSheet} from 'react-native';
import {LA_BLUE} from '../constants/color';

export default StyleSheet.create({
  containerNoText: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWithText: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: LA_BLUE,
    marginLeft: 4,
  },
  iconSize: {
    fontSize: 28,
    color: LA_BLUE,
  },
  iconSizeSmall: {
    fontSize: 18,
    color: LA_BLUE,
  },
});
