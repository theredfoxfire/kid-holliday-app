// @flow
import React, {
  Component,
} from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import styles from '../services/styles';
import ChartGraph from './ChartGraph';

type Data = {
  index: number | string;
  time: number;
};

type Props = {
  data: {
    data: Array<Data>;
    width: number;
  };
};

export default class ChartPage extends Component {
  props: Props;

  render() {
    const {
      data,
    } = this.props;

    const graphProps = {};
    graphProps.data = data.data;
    graphProps.width = data.width;
    graphProps.xAccessor = (d: Data) => new Date(d.time * 1000);
    graphProps.yAccessor = (d: Data) => d.index;

    return (
      <View style={styles.containerChartPage}>
        <View style={styles.content}>
          <ScrollView horizontal={true}>
            <View style={styles.graph}>
              <ChartGraph {...graphProps} />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
