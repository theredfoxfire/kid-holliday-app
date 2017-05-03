import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import autobind from 'class-autobind';
import LoadingIndicator from '../core-ui/LoadingIndicator';

type Props = {
  refreshing: boolean;
  onRefresh?: () => void;
  children?: ReactComponent;
  style?: StyleSet;
  onStopRefresh: () => void;
};

type State = {
  endViewReached: boolean;
  offsetY: number;
};

export default class PullToRefresh extends Component {
  state: State
  props: Props;
  _scrollView: ScrollView;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      endViewReached: false,
      offsetY: 0,
    };
  }

  render() {
    let {refreshing, children} = this.props;
    return (
      <ScrollView
        style={{flex: 1}}
        ref={(component) => {
          this._scrollView = component;
        }}
        scrollEventThrottle={16}
        scrollEnabled={!refreshing}
        onResponderMove={this._onResponderMove}
        onScroll={this._onScroll}
      >
        {children}
        {refreshing ?
          <LoadingIndicator /> :
          null
        }
      </ScrollView>
    );
  }

  _onScroll(e) {
    let {nativeEvent} = e;
    let currentOffsetY = nativeEvent.contentOffset.y;
    let onEndReached = (nativeEvent.contentSize.height - currentOffsetY) <= nativeEvent.layoutMeasurement.height;
    if (onEndReached) {
      if (!this.state.endViewReached) {
        this.setState({
          endViewReached: true,
          offsetY: nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height,
        });
      }
    } else {
      if (this.state.endViewReached) {
        this.setState({endViewReached: false});
      }
    }
  }

  _onResponderMove(e) {
    let {endViewReached, offsetY} = this.state;
    let {refreshing, onRefresh} = this.props;
    if (e.nativeEvent.locationY <= -50 && endViewReached) {
      if (!refreshing) {
        this._scrollView.scrollTo({y: offsetY + 60, animated: true});
        onRefresh();
      }
    } else {
      if (this.props.refreshing) {
        this.props.onStopRefresh && this.props.onStopRefresh();
      }
    }
  }
}
