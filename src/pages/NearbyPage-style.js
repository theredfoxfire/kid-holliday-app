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
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: GREY,
    borderBottomWidth: 2,
    marginHorizontal:5,
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
    height: 50,
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
    width: 140,
    marginTop: 10,
    marginLeft: 5,
  },
  distance: {
    color: LA_BLUE_OLD,
  },
  buttonContainer: {
    width: 210,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 5,
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
