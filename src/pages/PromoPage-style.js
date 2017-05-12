//@flow

import {
  StyleSheet,
  Platform,
} from 'react-native';
import {getScreenSize} from '../helpers/getSize';
import {GREY, LA_BLUE_OLD, DARK_GREY, LA_RED} from '../constants/color';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  image: {
    width: 90,
    height: 60,
  },
  placeContainer: {
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: GREY,
    borderBottomWidth: 2,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  barContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  itemPlaceContainer: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  bottomPlaceContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    width: 270,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  distanceContainer: {
    width: 150,
    marginTop: 10,
  },
  distance: {
    color: LA_BLUE_OLD,
  },
  buttonContainer: {
    width: 220,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  init: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  lableText: {
    color: LA_RED,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
