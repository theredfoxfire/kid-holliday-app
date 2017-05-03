// @flow
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import {
  Button,
  TextField,
} from '../core-ui';
import LoadingIndicator from '../core-ui/LoadingIndicator';
import styles from './LoginPage-style';
import autobind from 'class-autobind';
import {decrypt} from '../helpers/encryption';

type State = {
  email: string;
  password: string;
};
type Props = {
  isLoading: boolean;
  onLoginSubmit: (user: {email: string; password: string}) => null;
};

export default class LoginPage extends Component {
  state: State;
  props: Props;

  _onEmailChange(text: string) {
    this.setState({
      email: text,
    });
  }
  _onPasswordChange(text: string) {
    this.setState({
      password: text,
    });
  }
  _onLoginSubmit() {
    // this.props.onLoginSubmit({
    //   email: this.state.email,
    //   password: this.state.password,
    // });
    this.props.onLoginSubmit();
  }
  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      email: '',
      password: '',
    };
  }
  // componentDidMount() {
  //   AsyncStorage.multiGet(['@email', '@password'], (error, result) => {
  //     let [[, email], [, password]] = result;
  //     if (result != null) {
  //       this.setState({
  //         email: email ? email : '',
  //         password: password ? decrypt(password) : '',
  //       });
  //     }
  //   });
  // }
  render() {
    let {isLoading, onPressForgot} = this.props;
    let pressForgot = onPressForgot ? onPressForgot : () => {};
    // if (isLoading) {
    //   return <LoadingIndicator />;
    // }
    return (
      <View style={styles.mainContainer}>
        <View style={styles.field}>
          <TextField
            placeholder="Username"
            value={this.state.email}
            placeholderTextColor="#9a9a9a"
            onChangeText={this._onEmailChange}
          />
        </View>
        <View style={styles.field}>
          <TextField
            placeholder="Password"
            placeholderStyle={styles.placeholderStyle}
            placeholderTextColor="#9a9a9a"
            value={this.state.password}
            onChangeText={this._onPasswordChange}
          />
        </View>
        <View style={styles.forgot}>
          <TouchableOpacity onPress={() => pressForgot()}>
            <Text style={styles.labelForgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.signUp}>
            <Text>Don't have any account? </Text>
            <TouchableOpacity onPress={() => pressForgot()}>
              <Text style={styles.labelForgot}>Sign Up.</Text>
            </TouchableOpacity>
          </View>
          <Button
            text="MASUK"
            onPress={this._onLoginSubmit}
            style={{width: 300}}
          />
        </View>
      </View>
    );
  }
}