// @flow
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import {
  Button,
  TitleBar,
  TextField,
} from '../core-ui';
import styles from './ForgotPage-style';
import autobind from 'class-autobind';
import backroungCover from '../images/la-background.png';
import laLogo from '../images/la-logo.png';



type State = {

};
type Props = {
  onEmailSubmit: () => void;
  backToLogin: () => void;
};

export default class ForgotPage extends Component {
  state: State;
  props: Props;

  _onEmailChange(text: string) {
    this.setState({
      email: text,
    });
  }

  _onEmailSubmit() {
    this.props.onEmailSubmit({
      email: this.state.email,
    });
  }

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.barContainer}>
          <TitleBar
            title="Forgot Password"
            iconName="arrow-back"
            onIconButtonPress={this.props.backToLogin}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image source={laLogo} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.field}>
            <TextField
              placeholder="Your Email"
              value={this.state.email}
              placeholderTextColor="#9a9a9a"
              onChangeText={this._onEmailChange}
            />
          </View>
          <Button
            text="RESET PASSWORD"
            onPress={this._onEmailSubmit()}
            style={{width: 300}}
          />
        </View>
        <View style={styles.wall}>
          <Image source={backroungCover} style={styles.backgroundImage} />
        </View>
      </View>
    );
  }
}
