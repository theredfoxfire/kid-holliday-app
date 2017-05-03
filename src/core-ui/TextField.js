//@flow
import React, {Component} from 'react';
import autobind from 'class-autobind';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Icon,
  Button,
} from '../core-ui';
import styles from './TextField-style';

type State = {
  passwordVisible: boolean;
};

type Props = {
  placeholder?: string;
  iconName?: string;
  label?: string;
  itemLabelPre?: string;
  itemLabelEnd?: string;
  buttonLabel?: string;
  isPassword?: boolean;
  onButtonPress?: () => any;
  onIconPress?: () => any;
};

export default class TextField extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      passwordVisible: false,
    };
  }

  render() {
    let {isPassword, placeholder, iconName, label, itemLabelPre, itemLabelEnd, buttonLabel, onButtonPress, onIconPress, ...otherProps} = this.props;
    let {passwordVisible} = this.state;
    let iconElement;
    if (iconName) {
      iconElement = (
        <TouchableOpacity style={styles.iconBox} onPress={onIconPress}>
          <Icon name={iconName} style={styles.icon} />
        </TouchableOpacity>
      );
    }
    let secureTextEntry = isPassword ?
      (
        passwordVisible ? {secureTextEntry: false} : {secureTextEntry: true}
      ) :
      {secureTextEntry: false};
    let passwordVisibleIcon = (
      <TouchableWithoutFeedback onPress={this._onPasswordVisibleChange}>
        <Icon name={passwordVisible ? 'visibility' : 'visibility-off'} style={[styles.icon, {fontSize: 20, marginRight: 10}]} />
      </TouchableWithoutFeedback>
    );
    return (
      <View style={styles.root}>
        {label ? <View style={styles.label}><Text style={styles.textLabel}>{label}</Text></View> : null}
        <View style={styles.inputBox}>
          {itemLabelPre ? <View style={styles.labelItem}><Text>{itemLabelPre}</Text></View> : null}
          <TextInput underlineColorAndroid="#c0c0c0" style={styles.input} placeholder={placeholder} {...secureTextEntry} {...otherProps} />
          {iconElement}
          {itemLabelEnd ? <View style={styles.labelItem}><Text>{itemLabelEnd}</Text></View> : null}
          {buttonLabel ? <Button text={buttonLabel} style={styles.button} onPress={onButtonPress} /> : null}
          {isPassword ? passwordVisibleIcon : null}
        </View>
      </View>
    );
  }

  _onPasswordVisibleChange() {
    let {passwordVisible} = this.state;
    this.setState({passwordVisible: !passwordVisible});
  }
}
