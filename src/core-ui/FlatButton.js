// @flow

import React, {Component} from 'react';
import autobind from 'class-autobind';
import {
  TouchableOpacity,
} from 'react-native';
import styles from './FlatButton-style';

type State = {
  isBorderShown: boolean;
};

type Props = {
  style?: StyleSet;
  children?: ReactNode;
  onPress: () => void;
};

export default class FlatButton extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      isBorderShown: true,
    };
  }

  render() {
    let {isBorderShown} = this.state;
    let {style, children, onPress} = this.props;
    style = style ? style : {backgroundColor: '#11c853', borderColor: '#139E13'};
    return (
      <TouchableOpacity
        onPress={onPress}
        onPressIn={this._pressIn}
        onPressOut={this._pressOut}
        activeOpacity={0.9}
        style={[styles.buttonContainer, style, {borderBottomWidth: isBorderShown ? 10 : 0}]}
      >
        {children}
      </TouchableOpacity>
    );
  }

  _pressIn() {
    this.setState({isBorderShown: false});
  }

  _pressOut() {
    this.setState({isBorderShown: true});
  }
}
