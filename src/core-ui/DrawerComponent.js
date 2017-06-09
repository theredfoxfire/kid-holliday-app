// @flow
import React, {Component} from 'react';
import autobind from 'class-autobind';
import {
  View,
  Text,
  Image,
} from 'react-native';
import {Icon} from '../core-ui';

import styles from './DrawerComponent-style';
import bgMenu from '../images/promosocmed.jpg';
import DrawerMenuItem from '../core-ui/DrawerMenuItem';
import LoadingIndicator from './LoadingIndicator';

type Props = {
  guestMode?: boolean;
  onPressClose: () => void;
  onPressPlaces: () => void;
  onPressHome: () => void;
  onPressLogout: () => void;
  onPressNearBy: () => void;
  onPressTodo: () => void;
  onPressPromo: () => void;
  currentUser?: Object;
};

export default class DrawerComponent extends Component {
  props: Props

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    let {onPressClose, onPressLogout, onPressHome, onPressNearBy, onPressPlaces, onPressTodo, onPressPromo, currentUser} = this.props;
    let todos = currentUser.username ?
      <DrawerMenuItem onPress={() => onPressTodo()} onSwipe={onPressClose}>
        <Icon name="done-all" style={styles.icon} /><Text style={styles.drawerItemLable}>Todo List</Text>
      </DrawerMenuItem> : null;
    return (
      <View>
        <View style={styles.containerMenus}>
          <View style={styles.drawerBody}>
            <DrawerMenuItem onPress={onPressHome} onSwipe={onPressClose} style={styles.home}>
              <Icon name="home" style={styles.iconFooter} /><Text style={styles.footerText}>Home</Text>
            </DrawerMenuItem>
            <DrawerMenuItem onPress={onPressPlaces} onSwipe={onPressClose}>
              <Icon name="place" style={styles.icon} /><Text style={styles.drawerItemLable}>Places</Text>
            </DrawerMenuItem>
            <DrawerMenuItem onPress={onPressNearBy} onSwipe={onPressClose}>
              <Icon name="explore" style={styles.icon} /><Text style={styles.drawerItemLable}>Search Nearby</Text>
            </DrawerMenuItem>
            {todos}
            <DrawerMenuItem onPress={onPressPromo} onSwipe={onPressClose}>
              <Icon name="monetization-on" style={styles.icon} /><Text style={styles.drawerItemLable}>Kids Events</Text>
            </DrawerMenuItem>
            <View style={styles.headerBottom}>
              <Image
                source={bgMenu}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <DrawerMenuItem onPress={() => {}} onSwipe={onPressClose} style={styles.onClose} />
          </View>
          <View style={styles.drawerFooter}>
            <DrawerMenuItem onPress={() => onPressLogout()} onSwipe={() => onPressClose()}>
              <Icon name="exit-to-app" style={styles.iconFooter} /><Text style={styles.footerText}>Keluar</Text>
            </DrawerMenuItem>
          </View>
        </View>
        <View style={styles.containerSpace} />
      </View>
    );
  }
}
