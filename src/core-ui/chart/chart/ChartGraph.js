// @flow
import React, {
  Component,
} from 'react';
import {
  ART,
  Dimensions,
  LayoutAnimation,
  Text,
  View,
} from 'react-native';
import formatNumber from '../../../helpers/formatNumber';
import autobind from 'class-autobind';

import Morph from 'art/morph/path';

import * as graphUtils from './graph-utils';

import styles from '../services/styles';
import {LIGHT_GREEN} from '../../../constants/color';

const {
  Group,
  Shape,
  Surface,
} = ART;

const PaddingSize = 30;
const TickWidth = PaddingSize * 2;
const AnimationDurationMs = 500;

const dimensionWindow = Dimensions.get('window');

type Data = {
  index: string | number;
  time: number;
};

type Props = {
    data: Array<Data>;
    width: number;
    height: number;
    xAccessor: (data: Data) => any;
    yAccessor: (data: Data) => any;
};

type Path = {
  tween: (delta?: number) => any;
};

type State = {
  graphWidth: number;
  graphHeight: number;
  linePath: Path;
  scale?: Object;
  ticks?: Array<any>;
};

type Graph = {
  path?: Path;
};

export default class ChartGraph extends Component {
  props: Props;
  state: State;
  cancelAnimationFrame: () => any;
  requestAnimationFrame: () => any;
  previousGraph: Graph;
  animating: ?boolean;

  static defaultProps = {
    height: Math.round(dimensionWindow.height * 0.5),
  };

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      graphWidth: 0,
      graphHeight: 0,
      linePath: {
        tween: () => {},
      },
    };
  }

  componentWillMount() {
    this.computeNextState(this.props);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.computeNextState(nextProps);
  }

  computeNextState(nextProps: Props) {
    const {
      data,
      width,
      height,
      xAccessor,
      yAccessor,
    } = nextProps;

    const fullPaddingSize = PaddingSize * 2;
    const graphWidth = width - fullPaddingSize;
    const graphHeight = height - fullPaddingSize;

    const lineGraph = graphUtils.createLineGraph({
      data,
      xAccessor,
      yAccessor,
      width: graphWidth,
      height: graphHeight,
    });

    this.setState({
      graphWidth,
      graphHeight,
      linePath: lineGraph.path,
      ticks: lineGraph.ticks,
      scale: lineGraph.scale,
    });
    if (!this.previousGraph) {
      this.previousGraph = lineGraph;
    }
    if (this.props !== nextProps) {
      const pathFrom = this.previousGraph.path;
      const pathTo = lineGraph.path;

      this.cancelAnimationFrame(this.animating);
      this.animating = null;
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          AnimationDurationMs,
          LayoutAnimation.Types.easeInEaseOut,
          LayoutAnimation.Properties.opacity
        )
      );

      this.setState({
        linePath: Morph.Tween(
          pathFrom,
          pathTo,
        ),
      }, () => {
        this.animate();
      });

      this.previousGraph = lineGraph;
    }
  }

  animate(start?: number) {
    this.animating = this.requestAnimationFrame((timestamp) => {
      if (!start) {
        start = timestamp;
      }

      const delta = (timestamp - start) / AnimationDurationMs;

      if (delta > 1) {
        this.animating = null;
        this.setState({
          linePath: this.previousGraph.path,
        });
        return;
      }

      this.state.linePath.tween(delta);

      this.setState(this.state, () => {
        this.animate(start);
      });
    });
  }

  render() {
    const {
      yAccessor,
    } = this.props;

    const {
      graphWidth,
      graphHeight,
      linePath,
      ticks,
    } = this.state;

    return (
      <View style={styles.container}>
        <Surface width={graphWidth} height={graphHeight}>
          <Group x={0} y={0}>
            <Shape
              d={linePath}
              stroke={LIGHT_GREEN}
              strokeWidth={1}
            />
          </Group>
        </Surface>

        <View key={'ticksX'} style={styles.ticksX}>
          { ticks ?
            ticks.map((tick, index) => {
              const tickStyles = {};
              tickStyles.width = 60;
              tickStyles.left = tick.x - (TickWidth / 2);
              let newDate = new Date(tick.datum.time);

              return (
                <Text key={index} style={[styles.tickLabelX, tickStyles]}>
                  {newDate.getDate()}-{newDate.getMonth() + 1}-{newDate.getFullYear()}
                </Text>
              );
            }) :
            null
          }
        </View>

        <View key={'ticksY'} style={styles.ticksYContainer}>
          {ticks ?
            ticks.map((tick, index) => {
              const value = yAccessor(tick.datum);

              const tickStyles = {};
              tickStyles.width = TickWidth;
              tickStyles.left = tick.x - Math.round(TickWidth * 0.75);

              tickStyles.top = (tick.y + 2) - Math.round(TickWidth * 0.35);

              return (
                <View key={index} style={[styles.tickLabelY, tickStyles]}>
                  <Text style={styles.tickLabelYText}>
                    {formatNumber(value + '', {prefix: ' ', separator: '.'})}
                  </Text>
                </View>
              );
            }) :
            null
          }
        </View>

        <View key={'ticksYDot'} style={styles.ticksYContainer}>
          {ticks ?
            ticks.map((tick, index) => (
              <View
                key={index}
                style={[styles.ticksYDot, {
                  left: tick.x,
                  top: tick.y,
                }]}
              />
            )) :
            null
          }
        </View>
      </View>
    );
  }
}
