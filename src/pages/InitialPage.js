// @flow
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import {
  Button,
} from '../core-ui';
import styles from './InitialPage-style';
import autobind from 'class-autobind';
import LoginPageContainer from '../containers/LoginPageContainer';
import backroungCover from '../images/la-background.png';
import laLogo from '../images/la-logo.png';

type UserLogin = {
  email: string;
  password: string;
};

type Props = {
  isLoading: boolean;
  onLoginSubmit: (user: UserLogin) => void;
  onPressForgot: () => void;
  onFacebookLoginButtonPress: () => void;
  onGoogleLoginButtonPress: () => void;
  onGuestLoginButtonPress: () => void;
};

export default class LoginPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image source={laLogo} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.formContainer}>
          <LoginPageContainer />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.divider}>
            <View style={styles.hr}></View>
            <Text style={styles.textDivider}>OR</Text>
            <View style={styles.hr}></View>
          </View>
          <Button
            text="LOGIN WITH FACEBOOK"
            iconEntypo="facebook"
            iconStyle={{fontSize: 25, marginRight: 10}}
            style={{backgroundColor: '#3b5998', borderColor: '#3b5998', width: 300}}
            textStyle={styles.centeredButton}
            onPress={this.props.onFacebookLoginButtonPress}
          />
          <Button
            text="LOGIN WITH GOOGLE"
            iconEntypo="google-"
            iconStyle={{fontSize: 25, marginRight: 10}}
            style={{backgroundColor: '#d52d28', borderColor: '#d52d28', width: 300}}
            textStyle={styles.centeredButton}
            onPress={this.props.onGoogleLoginButtonPress}
          />
          <View style={{height: 30}} />
          <View style={styles.divider}>
            <View style={styles.hr}></View>
            <Text style={styles.textDivider}>LOGIN AS A GUEST</Text>
            <View style={styles.hr}></View>
          </View>
          <Button
              text="SKIP"
              textStyle={styles.centeredButton}
              inverted
              onPress={this.props.onGuestLoginButtonPress}
              style={{width: 120}}
            />
        </View>
        <View style={styles.wall}>
          <Image source={backroungCover} style={styles.backgroundImage} />
        </View>
      </View>
    );
  }
}
