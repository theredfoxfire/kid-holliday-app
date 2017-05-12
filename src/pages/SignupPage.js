// @flow
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Keyboard,
} from 'react-native';
import {
  Button,
  TitleBar,
  TextField,
} from '../core-ui';
import styles from './SignupPage-style';
import autobind from 'class-autobind';
import backroungCover from '../images/la-background.png';
import laLogo from '../images/la-logo.png';

type State = {

};
type Props = {
  onSignupSubmit: () => void;
  backToLogin: () => void;
};

export default class SignupPage extends Component {
  state: State;
  props: Props;

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow (e) {
    this.setState({
      topLogo: {height: 100}
    })
  }

  keyboardDidHide (e) {
    this.setState({
      topLogo: {}
    })
  }

  _onEmailChange(text: string) {
    this.setState({
      email: text,
    });
  }
  _onUsernameChange(text: string) {
    this.setState({
      username: text,
    });
  }
  _onPasswordChange(text: string) {
    this.setState({
      password: text,
    });
  }
  _onRepasswordChange(text: string) {
    this.setState({
      repassword: text,
    });
  }

  _onSignupSubmit() {
    this.props.onSignupSubmit({
      email: this.state.email,
    });
  }

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      email: '',
      username: '',
      password: '',
      repassword: '',
      topLogo: {},
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.barContainer}>
          <TitleBar
            title="Sign Up"
            iconName="arrow-back"
            onIconButtonPress={this.props.backToLogin}
          />
        </View>
        <View style={[styles.imageContainer, this.state.topLogo]}>
          <Image source={laLogo} style={[styles.image, this.state.topLogo]} resizeMode="contain" />
        </View>
        <View style={styles.formContainer}>
          <ScrollView keyboardShouldPersistTaps="always">
            <View style={styles.field}>
              <TextField
                placeholder="Your Email"
                value={this.state.email}
                placeholderTextColor="#9a9a9a"
                onChangeText={this._onEmailChange}
              />
            </View>
            <View style={styles.field}>
              <TextField
                placeholder="Pick your username"
                value={this.state.username}
                placeholderTextColor="#9a9a9a"
                onChangeText={this._onUsernameChange}
              />
            </View>
            <View style={styles.field}>
              <TextField
                placeholder="Your password"
                value={this.state.password}
                placeholderTextColor="#9a9a9a"
                secureTextEntry
                onChangeText={this._onPasswordChange}
              />
            </View>
            <View style={styles.field}>
              <TextField
                placeholder="Retype your password"
                value={this.state.repassword}
                placeholderTextColor="#9a9a9a"
                secureTextEntry
                onChangeText={this._onRepasswordChange}
              />
            </View>
            <View style={{marginBottom: 50}} />
          </ScrollView>
          <Button
            text="CREATE ACCOUNT"
            onPress={this._onSignupSubmit()}
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
