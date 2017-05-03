// @flow
import {StyleSheet} from 'react-native';
import {SECONDARY_RED, LIGHT_YELLOW} from '../constants/color';

export default StyleSheet.create({
  tabGroup: {
    flex: 1,
    flexDirection: 'column',
  },
  tabBar: {
    height: 46,
    flexDirection: 'row',
    backgroundColor: SECONDARY_RED,
  },
  selectedTabBarWrapper: {
    height: 4,
    flexDirection: 'row',
  },
  selectedIndicator: {
    flex: 1,
    backgroundColor: LIGHT_YELLOW,
  },
  selectedIndicatorSecondary: {
    backgroundColor: SECONDARY_RED,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SECONDARY_RED,
  },
  tabBarSecondary: {
    backgroundColor: 'white',
  },
  titleText: {
    fontWeight: '800',
    fontSize: 14,
    color: 'white',
    margin: 14,
    textAlign: 'center',
  },
  titleWrapper: {
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextSecondary: {
    color: 'black',
  },
  tabContent: {
    flex: 1,
  },
});
