//@flow
import {StyleSheet} from 'react-native';
import {
  PRIMARY_GREEN,
} from '../constants/color';

let dot = {
  borderRadius: 4,
  height: 8,
  margin: 3,
  width: 8,
};

export default StyleSheet.create({
  productHighlight: {
    height: 150,
    marginRight: 20,
    backgroundColor: 'white',
  },
  dot: {
    ...dot,
    backgroundColor: 'transparent',
    borderColor: PRIMARY_GREEN,
    borderWidth: 1,
  },
  activeDot: {
    ...dot,
    backgroundColor: PRIMARY_GREEN,
  },
  pagination: {
    left: null,
    right: 30,
    bottom: 5,
  },
});
