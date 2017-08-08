// @flow
import React, {Component} from 'react';
import {
  View,
  Dimensions,
  PanResponder,
  StyleSheet,
} from 'react-native';

let {width} = Dimensions.get('window');
let styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 18,
    marginRight: 30,
  },
});

type Props = {
  style?: StyleSet;
  children?: React$Element<*>;
  onPress: () => void;
  onSwipe: () => void;
};

export default class DrawerMenuItem extends Component {
  props: Props;
  _panResponder: any;

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderTerminationRequest: () => true,
      onShouldBlockNativeResponder: () => true,
      onPanResponderGrant: () => {
        this.refs.container.setNativeProps({
          style: {
            opacity: 0.5,
          },
        });
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.refs.container.setNativeProps({
          style: {
            opacity: 1,
          },
        });
        let {x0, moveX, y0, moveY} = gestureState;
        let dx = 0;
        let dy = 0;
        if (moveX > 0) {
          dx = moveX - x0;
        }
        if (moveY > 0) {
          dy = moveY - y0;
        }
        if ((Math.abs(dx) < 10) && (Math.abs(dy) < 10)) {
          // on press
          this.props.onPress();
        } else {
          // left swipe
          if (dx < 0) {
            this.props.onSwipe();
          }
        }
      },
    });
  }
  render() {
    return (
      <View
        ref="container"
        {...this._panResponder.panHandlers}
        style={[styles.container, this.props.style]}
      >
        {this.props.children}
      </View>
    );
  }
}
