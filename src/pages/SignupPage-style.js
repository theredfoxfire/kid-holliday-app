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
  wall: {
    marginTop: -500,
    zIndex: 0,
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  image: {
    width: getScreenSize().width * 0.50,
    height: height,
  },
  imageContainer: {
    height: 200,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
  },
  formContainer: {
    marginTop: -30,
    height: 280,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barContainer: {
    height: 60,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  field: {
    width: 300,
  },
});
