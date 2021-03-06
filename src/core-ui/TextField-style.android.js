//@flow
import {StyleSheet} from 'react-native';
import {GREY} from '../constants/color';

export default StyleSheet.create({
  root: {
    marginBottom: 5,
    marginTop: 10,
  },
  label: {
    marginLeft: 2,
  },
  labelItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLabel: {
    fontWeight: 'bold',
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 0,
    backgroundColor: GREY,
    paddingHorizontal: 7,
    borderWidth: 0.8,
    borderColor: GREY,
    borderRadius: 5,
    maxHeight: 40,
    minHeight: 40,
    fontSize: 18,
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
