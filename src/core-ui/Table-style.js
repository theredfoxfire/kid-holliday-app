import {StyleSheet} from 'react-native';
import {PRIMARY_GREY, SECONDARY_GREY, SECONDARY_GREEN} from '../constants/color';

let triangle = {
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderLeftWidth: 5,
  borderRightWidth: 5,
  borderBottomWidth: 10,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  marginTop: 2,
};

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: PRIMARY_GREY,
  },
  headerItem: {
    justifyContent: 'center',
  },
  defaultFlex: {
    flex: 1,
  },
  indexFlex: {
    flex: 0.3,
    paddingLeft: 10,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
  },
  recordRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  recordText: {
    fontWeight: '500',
    marginRight: 5,
  },
  greenText: {
    color: SECONDARY_GREEN,
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  textWrapperAdvanced: {
    flexDirection: 'column',
    flex: 1,
  },
  indexWrapper: {
    flex: 0.3,
    paddingLeft: 10,
  },
  evenWrapper: {
    paddingVertical: 8,
  },
  oddWrapper: {
    backgroundColor: SECONDARY_GREY,
    paddingVertical: 8,
  },
  triangleWrapper: {
    flexDirection: 'row',
    paddingTop: 3,
  },
  triangleUp: {
    ...triangle,
    borderBottomColor: 'red',
  },
  triangleDown: {
    ...triangle,
    borderBottomColor: SECONDARY_GREEN,
    transform: [
      {rotate: '180deg'},
    ],
  },
  percentage: {
    color: '#929292',
    fontWeight: 'bold',
    fontSize: 10,
    marginLeft: 1,
  },
});
