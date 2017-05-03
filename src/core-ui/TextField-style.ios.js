//@flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    marginVertical: 5,
    marginTop: 10,
  },
  label: {
    height: 20,
    marginLeft: 2,
  },
  textLabel: {
    fontWeight: 'bold',
  },
  labelItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    flexDirection: 'row',
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#9eaba2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    height: 38,
    paddingHorizontal: 7,
  },
  iconBox: {
    padding: 5,
  },
  icon: {
    fontSize: 28,
    color: '#9eaba2',
  },
  button: {
    flex: 0,
    paddingHorizontal: 6,
  },
  multiline: {
    height: 120,
  },
});
