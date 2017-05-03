import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  navigation1: {
    flexDirection: 'row',
  },
  navigationItem1: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#00C853',
  },
  navigationText1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  selectedItem1: {
    borderBottomWidth: 4,
    borderBottomColor: '#818181',
  },
  navigation2: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D5D5D5',
  },
  navigationItem2: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  selectedItem2: {
    borderBottomWidth: 4,
    borderBottomColor: '#00C853',
  },
  selectedItemText: {
    color: '#282828',
  },
  navigationText2: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
