// @flow

import {StyleSheet} from 'react-native';
import {LA_RED} from '../constants/color';

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
    color: LA_RED,
    marginLeft: 4,
  },
  iconSize: {
    fontSize: 28,
    color: LA_RED,
  },
  iconSizeSmall: {
    fontSize: 18,
    color: LA_RED,
  },
});
