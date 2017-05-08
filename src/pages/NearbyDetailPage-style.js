//@flow

import {
  StyleSheet,
  Platform,
} from 'react-native';
import {getScreenSize} from '../helpers/getSize';
import {LA_RED} from '../constants/color';

const height = Platform.OS === 'ios' ? 175 : 200;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  image: {
    width: getScreenSize().width * 0.9,
    height: height,
    marginRight: -3,
    marginBottom: 15,
  },
  contentContainer: {
    height: getScreenSize().height * 0.9,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  barContainer: {
    height: 60,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
});