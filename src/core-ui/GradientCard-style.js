// @flow
import {StyleSheet, Dimensions} from 'react-native';

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
  imageHorizontal: {
    height: 150,
    width: 180,
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
  },
  nameText: {
    ...text,
    fontSize: 18,
    padding: 7,
  },
  subNameText: {
    ...text,
    fontSize: 15,
    paddingLeft: 7,
    paddingBottom: 7,
  },
  infoText: {
    ...text,
  },
  ageText: {
    ...text,
    fontSize: 11,
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#fff',
    paddingRight: 5,
  },
  separator: {
    borderColor: '#fff',
    borderWidth: 0.5,
    height: 1,
    marginHorizontal: 6,
  },
  infoContainer: {
    padding: 7,
  },
  ageContainer: {
    padding: 7,
  },
  spacer: {
    flex: 1,
  },
  /* product highlight styles */
  highlightContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(30, 180, 50, 0.7)',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    flexDirection: 'row',
    marginTop: 10,
    padding: 5,
    width: 100,
  },
  highlightIcon: {
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 3,
  },
  highlightText: {
    color: '#fff',
  },
});
