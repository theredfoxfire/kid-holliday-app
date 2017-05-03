//@flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkBox: {
    fontSize: 32,
    color: '#00C853',
    marginRight: 8,
  },
  description: {
    flex: 1,
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  enhancedTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  normalDescription: {
    fontSize: 16,
    fontWeight: '500',
  },
});
