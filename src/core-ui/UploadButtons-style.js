// @flow
import {StyleSheet} from 'react-native';

let button = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 2,
  padding: 10,
};

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'grey',
    flex: 1,
  },
  camera: {
    ...button,
  },
  gallery: {
    ...button,
  },
  icon: {
    fontSize: 16,
    color: 'grey',
    marginRight: 5,
  },
  text: {
    color: 'grey',
    fontSize: 13,
  },
  separator: {
    borderWidth: 0.7,
    borderColor: 'grey',
    borderStyle: 'dashed',
  },
});
