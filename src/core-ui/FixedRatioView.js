// @flow
import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import autobind from 'class-autobind';

type Props = {
  style?: StyleSet;
  ratio?: number;
  maxHeight?: number;
  component?: Function;
};

type State = {
  width: number;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export default class FixedRatioView extends Component {
  props: Props;
  state: State;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      width: 0,
    };
  }

  render() {
    let {style, maxHeight, ratio, component: CustomComponent, ...otherProps} = this.props;
    let {width} = this.state;
    let height = null;
    if (ratio && width) {
      height = Math.round(width / ratio);
    }
    if (height && maxHeight != null) {
      height = Math.min(height, maxHeight);
    }
    // Calculated width and heigh should both be non-empty and non-zero,
    // otherwise we'll leave the style alone.
    if (width && height) {
      style = [style, {width, height}];
    }
    let ViewComponent = CustomComponent || View;
    return (
      <View style={styles.container}>
        <View onLayout={this._onLayout} />
        <ViewComponent {...otherProps} style={style} />
      </View>
    );
  }

  _onLayout(event) {
    let {width} = event.nativeEvent.layout;
    this.setState({width});
  }
}
