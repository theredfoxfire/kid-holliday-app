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
import {GREY} from '../constants/color';

type State = {
  passwordVisible: boolean;
};

type Props = {
  placeholder?: string;
  iconNamePre?: string;
  iconNameEnd?: string;
  label?: string;
  iconStylePre?: StyleSet;
  iconStyleEnd?: StyleSet;
  itemLabelPre?: string;
  itemLabelEnd?: string;
  buttonLabel?: string;
  isPassword?: boolean;
  onButtonPress?: () => any;
  onIconPressPre?: () => any;
  onIconPressEnd?: () => any;
  rootStyle?: StyleSet;
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
    let {isPassword, placeholder, rootStyle, iconNameEnd, iconNamePre, label,
      itemLabelPre, itemLabelEnd, buttonLabel, onButtonPress, onIconPressPre,
      iconStylePre, iconStyleEnd, onIconPressEnd, ...otherProps
    } = this.props;
    let {passwordVisible} = this.state;
    let iconElementEnd;
    if (iconNameEnd) {
      iconElementEnd = (
        <TouchableOpacity onPress={onIconPressEnd}>
          <Icon name={iconNameEnd} style={[styles.icon, iconStyleEnd]} />
        </TouchableOpacity>
      );
    }
    let iconElementPre;
    if (iconNamePre) {
      iconElementPre = (
        <TouchableOpacity onPress={onIconPressPre}>
          <Icon name={iconNamePre} style={[styles.icon, iconStylePre]} />
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
      <View style={[styles.root, rootStyle]}>
        {label ? <View style={styles.label}><Text style={styles.textLabel}>{label}</Text></View> : null}
        <View style={styles.inputBox}>
          {itemLabelPre ? <View style={styles.labelItem}><Text>{itemLabelPre}</Text></View> : null}
          {iconElementPre}
          <TextInput underlineColorAndroid={GREY} style={styles.input} placeholder={placeholder} {...secureTextEntry} {...otherProps} />
          {iconElementEnd}
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
