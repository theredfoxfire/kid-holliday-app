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
            <View style={styles.headerTop} />
            <View style={styles.headerBottom}>
              <View style={styles.headerBottomLeft}>
                <Image
                  source={logoImage}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.headerBottomRight}>
                <Text style={styles.logoTop}>KARSA</Text>
                <Text style={styles.logoBottom}>Petani Pintar</Text>
              </View>
            </View>
          </View>
          <View style={styles.drawerBody}>
            {/*<DrawerMenuItem onPress={onPressSearch} onSwipe={onPressClose}>
              <Icon name="search" style={styles.icon} /><Text style={styles.drawerItemLable}>Pencarian</Text>
            </DrawerMenuItem>*/}
            {this.props.guestMode ? null : (
              <DrawerMenuItem onPress={onPressProfile} onSwipe={onPressClose}>
                <Icon name="person" style={styles.icon} /><Text style={styles.drawerItemLable}>Profil Saya</Text>
              </DrawerMenuItem>
            )}
            <DrawerMenuItem onPress={onPressContactUs} onSwipe={onPressClose}>
              <Icon name="phone" style={styles.icon} /><Text style={styles.drawerItemLable}>Hubungi Kami</Text>
            </DrawerMenuItem>
            <DrawerMenuItem onPress={() => {}} onSwipe={onPressClose} style={{flex: 1, backgroundColor: '#fff'}} />
          </View>
          <View style={styles.drawerFooter}>
            <DrawerMenuItem onPress={() => onPressLogout()} onSwipe={() => onPressClose()}>
              <Icon name="lock" style={styles.icon} /><Text style={styles.drawerItemLable}>Keluar</Text>
            </DrawerMenuItem>
          </View>
        </View>
        <View style={styles.containerSpace} />
      </View>
    );
  }
}
