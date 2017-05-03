//@flow
import {StyleSheet} from 'react-native';
const border = {
  borderBottomWidth: 1,
  borderTopWidth: 1,
};
const center = {
  justifyContent: 'center',
  alignItems: 'center',
};
const inactiveStep = {
  flex: 1,
  flexDirection: 'row',
  ...center,
  borderBottomColor: '#afb3af',
  borderTopColor: '#afb3af',
  ...border,
};
const activeStep = {
  flex: 1,
  ...center,
  borderBottomColor: '#50da62',
  borderTopColor: '#50da62',
  flexDirection: 'row',
  ...border,
};
const arrowContainer = {
  width: 0,
  height: 0,
  borderTopWidth: 20,
  borderBottomWidth: 20,
  borderLeftWidth: 10,
  borderTopColor: 'white',
  borderBottomColor: 'white',
};
const rounded = {
  height: 20,
  width: 20,
  borderRadius: 10,
  marginRight: 10,
  ...center,
};

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  stepContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  stepInactiveMiddle: {
    ...inactiveStep,
    marginLeft: -10,
  },
  stepInactiveRight: {
    ...inactiveStep,
    borderRightColor: '#afb3af',
    borderRightWidth: 1,
    marginLeft: -10,
  },
  stepInactiveLeft: {
    ...inactiveStep,
    borderLeftColor: '#afb3af',
    borderLeftWidth: 1,
  },
  stepActiveLeft: {
    ...activeStep,
    borderLeftColor: '#50da62',
    borderLeftWidth: 1,
  },
  stepActiveMiddle: {
    ...activeStep,
    marginLeft: -10,
  },
  stepActiveRight: {
    ...activeStep,
    marginLeft: -10,
    borderRightColor: '#50da62',
    borderRightWidth: 1,
  },
  arrowInactiveContainer: {
    ...arrowContainer,
    borderLeftColor: '#afb3af',
  },
  arrowActiveContainer: {
    ...arrowContainer,
    borderLeftColor: '#50da62',
  },
  arrow: {
    width: 0,
    height: 0,
    borderTopWidth: 18,
    borderBottomWidth: 18,
    borderLeftWidth: 9,
    borderTopColor: 'rgba(0,0,0,0)',
    borderBottomColor: 'rgba(0,0,0,0)',
    borderLeftColor: '#fff',
    zIndex: 10,
    marginTop: -18,
    marginLeft: -10,
    position: 'absolute',
  },
  stepText: {
    textAlign: 'center',
  },
  roundedInactive: {
    ...rounded,
    backgroundColor: '#afb3af',
  },
  roundedActive: {
    ...rounded,
    backgroundColor: '#50da62',
  },
  textCounter: {
    color: '#fff',
  },
  textLabel: {
    fontSize: 11,
  },
  label: {
    flex: 1,
  },
  spacer: {
    flex: 0.2,
  },
});
