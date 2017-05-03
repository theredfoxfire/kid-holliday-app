// @flow
import {View, Text, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import autobind from 'class-autobind';
import FixedRatioView from './FixedRatioView';

type Dimensions = {
  width: number;
  height: number;
};

type SourceURI = {
  uri: string;
  width?: number;
  height?: number;
};

type Props = {
  renderIndicator?: () => ReactNode;
  source: SourceURI;
};

type State = {
  isLoading: boolean;
  dimensions: ?Dimensions;
  error: ?string;
};

let styles = StyleSheet.create({
  loadingIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class ResponsiveImage extends Component {
  props: Props;
  state: State;
  _pendingGetSize: ?{cancel: () => void};

  constructor(props: Props) {
    super(...arguments);
    autobind(this);
    this.state = this._calculateState(props);
    this._pendingGetSize = getImageSize(props.source.uri, this._onLoadSuccess, this._onLoadFail);
  }

  componentWillReceiveProps(newProps: Props) {
    let oldProps = this.props;
    // Check if image has changed.
    if (oldProps.source.uri !== newProps.source.uri) {
      if (this._pendingGetSize) {
        this._pendingGetSize.cancel();
      }
      this.setState(this._calculateState(newProps));
      this._pendingGetSize = getImageSize(newProps.source.uri, this._onLoadSuccess, this._onLoadFail);
    }
  }

  componentWillUnmount() {
    if (this._pendingGetSize) {
      this._pendingGetSize.cancel();
    }
  }

  _calculateState(props: Props) {
    let {width, height} = props.source;
    if (typeof width === 'number' && typeof height === 'number') {
      return {
        isLoading: true,
        dimensions: {width, height},
        error: null,
      };
    }
    return {
      isLoading: true,
      dimensions: null,
      error: null,
    };
  }

  // There's 4 states this component can be in:
  // 1. Loading, pre-defined dimensions
  // 2. Loading, unknown dimensions
  // 3. Loaded successfully
  // 4. Failure/error while loading
  render() {
    let {renderIndicator, ...otherProps} = this.props;
    let {isLoading, dimensions, error} = this.state;
    if (error != null) {
      return (
        <View><Text>{error}</Text></View>
      );
    }
    let loadingIndicator;
    if (isLoading && renderIndicator) {
      loadingIndicator = (
        <View style={styles.loadingIndicatorContainer}>
          <View>
            {renderIndicator()}
          </View>
        </View>
      );
    }
    let ratio = getRatio(dimensions);
    if (isLoading) {
      return (
        <FixedRatioView {...otherProps} ratio={ratio}>
          {loadingIndicator}
        </FixedRatioView>
      );
    }
    // Fully loaded.
    return (
      <FixedRatioView {...otherProps} ratio={ratio} component={Image} />
    );
  }

  _onLoadSuccess(width: number, height: number) {
    this.setState({
      isLoading: false,
      dimensions: {width, height},
    });
  }

  _onLoadFail(error: Error) {
    this.setState({
      isLoading: false,
      error: 'Error: ' + error.message,
    });
  }
}

function getRatio(dimensions: ?Dimensions) {
  if (dimensions != null) {
    let {width, height} = dimensions;
    return width / height;
  }
}

// A cancellable version of Image.getSize
function getImageSize(uri, onSuccess, onFail) {
  let isCancelled = false;
  Image.getSize(
    uri,
    (...args) => isCancelled ? null : onSuccess(...args),
    (...args) => isCancelled ? null : onFail(...args),
  );
  return {
    cancel: () => {
      isCancelled = true;
    },
  };
}
