// @flow

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  containerLarge: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: 80,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  person: {
    fontSize: 12,
    color: 'white',
  },
  storeNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 6,
  },
  groupNumbering: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  defaultText: {
    fontSize: 12,
    color: 'white',
  },
  groupWrapper: {
    flex: 1,
    marginTop: 8,
    flexDirection: 'row',
  },
  groupItems: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 6,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#AEAEAE',
  },
  userRole: {
    fontSize: 12,
    color: 'white',
    marginTop: 8,
  },
});
