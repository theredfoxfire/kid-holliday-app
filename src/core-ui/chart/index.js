// @flow
import React, {Component} from 'react';
import {
  View,
} from 'react-native';

import DateTime from 'immutable-datetime';

import ChartPage from './chart/ChartPage';
import styles from './services/styles';

type Price = Array<number | string>;

type Props = {
  data: Array<Price>;
};

export default class Chart extends Component {
  props: Props;

  render() {
    let graphData = [];
    let width = 0;
    this.props.data.forEach((value) => {
      let date = String(value[0]).split('/');
      let monthJS = Number(date[1]) - 1;
      let dateTime = DateTime.fromDateParts(date[2], monthJS, date[0]);
      graphData.push({index: value[1], time: dateTime});
      width += 120;
    });

    function removeDuplicateDate(arr) {
      return arr.reduce((p, c) => {
        let id = [c.time].join('|');
        if (p.temp.indexOf(id) === -1) {
          p.out.push(c);
          p.temp.push(id);
        }
        return p;
      }, {temp: [], out: []}).out;
    }

    let uniqueData = removeDuplicateDate(graphData);
    let dataSort = uniqueData.sort((a, b) => {
      return a.time - b.time;
    });
    return (
      <View style={styles.containerIndex}>
        <ChartPage
          data={{data: dataSort, width: width}}
        />
      </View>
    );
  }
}
