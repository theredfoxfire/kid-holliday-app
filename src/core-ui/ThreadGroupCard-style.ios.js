// @flow

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: 'gray',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  groupImage: {
    height: 140,
    width: 140,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  spacer: {
    flex: 1,
  },
  imageText: {
    flexDirection: 'row',
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'transparent',
  },
  numberText: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
    color: 'white',
  },
  contentText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    marginBottom: 4,
  },
  groupInfo: {
    flex: 1,
    paddingLeft: 6,
  },
  groupName: {
    fontWeight: '700',
    fontSize: 16,
    marginTop: 8,
  },
  groupDesc: {
    fontSize: 12,
    marginTop: 8,
  },
  groupDetailWrapper: {
    flex: 1,
  },
  buttonStyle: {
    maxHeight: 30,
    minHeight: 30,
    height: 30,
    margin: 0,
  },
});
