// @flow
import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_GREEN} from '../../constants/color';

const {width} = Dimensions.get('window');
let text = {
  backgroundColor: 'transparent',
  color: 'white',
};

export default StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    borderColor: '#777',
    borderRadius: 3,
    borderWidth: 0.5,
  },
  imageVertical: {
    flex: 1,
    height: width * 0.5,
    width: null,
  },
  /* product overlay styles */
  overlayContainer: {
    borderRadius: 3,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  infoText: {
    ...text,
    padding: 5,
  },
  numberText: {
    ...text,
    padding: 3,
  },
  separator: {
    borderColor: '#fff',
    borderWidth: 0.5,
    height: 1,
    marginHorizontal: 3,
  },
  infoContainer: {
    padding: 7,
  },
  shovelContainer: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#f8d21b',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
  shovel: {
    height: 10,
    width: 10,
  },
  noImage: {
    width: 0.3 * width,
    height: 175,
    backgroundColor: PRIMARY_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
