// @flow

import Color from './color';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  containerChartPage: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  containerIndex: {
    flex: 1,
  },

  graph: {
    marginLeft: 50,
    marginRight: 60,
    marginTop: 30,
    marginBottom: 30,
  },

  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tickLabelX: {
    position: 'absolute',
    bottom: 0,
    fontSize: 12,
    textAlign: 'center',
  },

  ticksYContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
  },

  tickLabelY: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'transparent',
    width: 100,
  },

  tickLabelYText: {
    fontSize: 12,
    textAlign: 'center',
  },

  ticksYDot: {
    position: 'absolute',
    width: 6,
    height: 6,
    backgroundColor: Color.Black,
    borderRadius: 100,
  },

  ticksX: {
    marginTop: 30,
    width: 100,
  },
});
