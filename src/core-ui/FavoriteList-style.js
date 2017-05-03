// @flow
import {StyleSheet, Dimensions} from 'react-native';
let {height} = Dimensions.get('window');

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  favoriteEmpty: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    alignItems: 'center',
    height: 0.25 * height,
  },
});
