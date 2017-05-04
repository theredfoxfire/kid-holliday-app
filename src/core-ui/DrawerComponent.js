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
import logoImage from '../images/la-logo.png';
import DrawerMenuItem from '../core-ui/DrawerMenuItem';

type Props = {
  guestMode?: boolean;
  onPressClose: () => void;
  onPressSearch: () => void;
  onPressProfile: () => void;
  onPressLogout: () => void;
  onPressContactUs: () => void;
};

export default class DrawerComponent extends Component {
  props: Props

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    let {onPressClose, onPressLogout, onPressProfile, onPressContactUs} = this.props;
    return (
      <View>
        <View style={styles.containerMenus}>
          <View style={styles.drawerHeader}>
            <View style={styles.headerBottom}>
                <Image
                  source={logoImage}
                  style={styles.image}
                  resizeMode="cover"
                />
            </View>
          </View>
          <View style={styles.drawerBody}>
            <DrawerMenuItem onPress={() => {}} onSwipe={onPressClose}>
              <Icon name="place" style={styles.icon} /><Text style={styles.drawerItemLable}>Places</Text>
            </DrawerMenuItem>
            <DrawerMenuItem onPress={() => {}} onSwipe={onPressClose}>
              <Icon name="place" style={styles.icon} /><Text style={styles.drawerItemLable}>Seacrh Nearby</Text>
            </DrawerMenuItem>
            <DrawerMenuItem onPress={() => {}} onSwipe={onPressClose}>
              <Icon name="place" style={styles.icon} /><Text style={styles.drawerItemLable}>Todo List</Text>
            </DrawerMenuItem>
            <DrawerMenuItem onPress={() => {}} onSwipe={onPressClose}>
              <Icon name="place" style={styles.icon} /><Text style={styles.drawerItemLable}>Discounts & Promotions</Text>
            </DrawerMenuItem>
            <DrawerMenuItem onPress={() => {}} onSwipe={onPressClose} style={styles.onClose} />
          </View>
          <View style={styles.drawerFooter}>
            <DrawerMenuItem onPress={() => onPressLogout()} onSwipe={() => onPressClose()}>
              <Icon name="lock" style={styles.iconFooter} /><Text style={styles.footerText}>Keluar</Text>
            </DrawerMenuItem>
          </View>
        </View>
        <View style={styles.containerSpace} />
      </View>
    );
  }
}
