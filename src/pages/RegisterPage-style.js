//@flow

import {StyleSheet} from 'react-native';
const marginField = {
  marginLeft: 15,
  marginRight: 15,
};

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 0.7,
  },
  formContainer: {
    flex: 1,
    padding: 15,
  },
  field: {
    height: 80,
  },
  forgot: {
    height: 80,
  },
  labelForgot: {
    color: '#19c80b',
  },
  divider: {
    height: 20,
    marginTop: -25,
    marginBottom: 10,
    flexDirection: 'row',
    ...marginField,
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#cacfcc',
    flex: 0.4,
    marginTop: -20,
  },
  textDivider: {
    textAlign: 'center',
    flex: 0.2,
    marginTop: 5,
  },
});
