import {StyleSheet} from 'react-native';
import {getScreenSize} from '../helpers/getSize';
import {
  DARK_GREY,
  PRIMARY_GREEN,
} from '../constants/color';

let {width, height} = getScreenSize();

let dotStyle = {
  width: 8,
  height: 8,
  borderWidth: 1,
  borderRadius: 8,
  marginHorizontal: 2,
};

export default StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  dimScreen: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    height: height,
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 35,
  },
  body: {
    padding: 20,
  },
  swiperStyle: {
  },
  image: {
    width: width - 100,
    height: 300,
  },
  pageText: {
    color: DARK_GREY,
    alignItems: 'center',
    textAlign: 'center',
  },
  paddingBottom: {
    paddingBottom: 30,
  },
  marginTop: {
    marginTop: 10,
  },
  marginBottom: {
    marginBottom: 10,
  },
  marginVertical: {
    marginVertical: 10,
  },
  footer: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#eee',
    padding: 5,
  },
  button: {
    margin: 5,
  },
  dot: {
    backgroundColor: '#ccc',
    borderColor: '#ccc',
    ...dotStyle,
  },
  activeDot: {
    backgroundColor: PRIMARY_GREEN,
    borderColor: PRIMARY_GREEN,
    ...dotStyle,
  },
});
