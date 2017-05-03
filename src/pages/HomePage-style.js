//@flow

import {
  StyleSheet,
  Platform,
} from 'react-native';
import {getScreenSize} from '../helpers/getSize';

import {LA_BLUE, LA_WHITE} from '../constants/color';

const height = Platform.OS === 'ios' ? 175 : 250;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  wall: {
    marginTop: -380,
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
    height: 300,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
  },
  welcomeContainer: {
    height: 60,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3194b5',
  },
});
