// @flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainWrapper: {
    flexDirection: 'column',
  },
  innerWrapper: {
    paddingVertical: 8,
  },
  radioItem: {
    flexDirection: 'row',
  },
  headerText: {
    padding: 5,
    fontSize: 13,
    color: '#444',
  },
  radioText: {
    flex: 1,
    fontSize: 13,
    color: '#444',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 10,
  },
});
