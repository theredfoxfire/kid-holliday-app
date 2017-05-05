// @flow

import {StyleSheet} from 'react-native';

import {LA_WHITE, LA_RED} from '../constants/color';
import {getScreenSize} from '../helpers/getSize';

export default StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: LA_WHITE,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  block: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 40,
    width: 40,
    backgroundColor: 'transparent',
  },
  logo: {
    marginRight: 10,
    width: 40,
    alignSelf: 'flex-start',
    paddingTop: 5,
  },
  title: {
    flex: 1,
    color: LA_RED,
    fontSize: 18,
    fontWeight: 'bold',
  },
  leftIcon: {
    marginTop: 9,
    padding: 0,
    paddingBottom: 2,
  },
});
