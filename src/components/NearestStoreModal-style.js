// @flow

import {StyleSheet, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

import {PRIMARY_GREEN, ALTERNATE_GREY} from '../constants/color';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
  },
  content: {
    width: width * 0.7,
    maxHeight: height * 0.8,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  header: {
    height: 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_GREEN,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
  modalScrollView: {
    flex: 1,
    width: width * 0.7,
  },
  button: {
    maxHeight: 0,
    maxWidth: width * 0.7,
  },
  rowWrapper: {
    width: width * 0.7,
    flexDirection: 'row',
    marginBottom: 8,
    height: 60,
    backgroundColor: ALTERNATE_GREY,
  },
  storeImageWrapper: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  storeDescription: {
    flex: 1,
    padding: 6,
  },
  storeName: {
    fontSize: 14,
    fontWeight: '700',
  },
  storeAddress: {
    fontSize: 12,
    flexWrap: 'wrap',
  },
  noStoreText: {
    fontSize: 14,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 8,
  },
});
