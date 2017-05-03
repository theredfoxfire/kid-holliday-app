// @flow

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  overlaySmall: {
    flex: 1,
    width: null,
    height: null,
  },
  overlayLarge: {
    flexDirection: 'column',
    width: null,
    height: null,
  },
  blurSmall: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
  },
  blurLarge: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
  },
  profileImageSmall: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  profileImageLarge: {
    width: 76,
    height: 76,
    borderRadius: 37.5,
    marginTop: 14,
  },
  textContainerSmall: {
    flex: 1,
    paddingHorizontal: 6,
    margin: 4,
  },
  textContainerLarge: {
    paddingHorizontal: 6,
    margin: 8,
    alignSelf: 'center',
  },
  imageContainerLarge: {
    alignSelf: 'center',
  },
  imageContainerSmall: {
    alignItems: 'center',
  },
});
