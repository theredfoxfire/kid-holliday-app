// @flow
import {Dimensions, StyleSheet} from 'react-native';
import {IMAGE_SLIDE_RATIO} from '../constants/size';

const {width} = Dimensions.get('window');

let text = {
  color: 'white',
  // fontFamily: '', //TODO: update font
};

let dot = {
  borderRadius: 4,
  height: 8,
  margin: 3,
  width: 8,
};

export default StyleSheet.create({
  container: {
  },
  imageSlide: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
  dot: {
    ...dot,
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
  },
  activeDot: {
    ...dot,
    backgroundColor: '#fff',
  },
  overlayContainer: {
    justifyContent: 'space-between',
    padding: 20,
    bottom: 0,
    left: 0,
    top: 0,
    right: 0,
    position: 'absolute',
  },
  pagination: {
    bottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textContainer: {
  },
  textTitle: {
    ...text,
    fontSize: 20,
  },
  textDate: {
    ...text,
    fontSize: 12,
    paddingVertical: 5,
  },
  textLink: {
    ...text,
    color: '#28ac58',
  },
  shareButton: {
    padding: 7,
  },
  image: {
    width,
    height: width * IMAGE_SLIDE_RATIO,
  },
});
