//@flow
import React, {Component} from 'react';
import {View, Alert, ScrollView} from 'react-native';

import {TextField, Button} from '../core-ui';
import LoadingIndicator from '../core-ui/LoadingIndicator';
import styles from './RegisterPage-style';

type State = {
  email: string;
  fullName: string;
  password: string;
  passwordConfirm: string;
};

type Props = {
  loading: boolean;
  onRegisterButtonPress: () => void;
};

export default class RegisterPage extends Component {
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      password: '',
      passwordConfirm: '',
    };
    (this: any)._handleRegisterButtonPress = this._handleRegisterButtonPress.bind(this);
  }

  _handleRegisterButtonPress() {
    let {email, fullName, password, passwordConfirm} = this.state;
    if (password.length < 8) {
      Alert.alert('Perhatian', 'Password kurang dari 8 karakter!', [
        {text: 'OK', onPress: () => {}},
      ]);
    } else if (password !== passwordConfirm) {
      Alert.alert('Perhatian', 'Password tidak sama!', [
        {text: 'OK', onPress: () => {
          this.setState({
            password: '',
            passwordConfirm: '',
          });
        }},
      ]);
    } else {
      this.props.onRegisterButtonPress({
        email: email,
        fullName: fullName,
        password: password,
      });
      this.setState({
        email: '',
        fullName: '',
        password: '',
        passwordConfirm: '',
      });
    }
  }

  render() {
    if (this.props.loading) {
      return <LoadingIndicator />;
    }
    return (
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={styles.formContainer}
      >
        <View style={styles.field}>
          <TextField
            label="Nama lengkap"
            placeholder="Masukkan nama lengkap anda"
            value={this.state.fullName}
            onChangeText={(text) => this.setState({fullName: text})}
          />
        </View>
        <View style={styles.field}>
          <TextField
            label="Email atau No HP"
            placeholder="Masukkan email atau no hp anda"
            value={this.state.email}
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <View style={styles.field}>
          <TextField
            label="Buat Kata Sandi"
            placeholder="Minimal 8 karakter"
            isPassword={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <View style={styles.field}>
          <TextField
            label="Ulangi Kata Sandi"
            placeholder="Ulangi kata sandi"
            isPassword={true}
            value={this.state.passwordConfirm}
            onChangeText={(text) => this.setState({passwordConfirm: text})}
          />
        </View>
        <View style={styles.field}>
          <Button
            text="DAFTAR"
            onPress={this._handleRegisterButtonPress}
          />
        </View>
      </ScrollView>
    );
  }

}
