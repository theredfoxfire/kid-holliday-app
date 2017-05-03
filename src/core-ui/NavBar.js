// @flow
import React, {Component} from 'react';
import autobind from 'class-autobind';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './NavBar-style';
import {Icon} from '../core-ui';
import {
  GREEN,
  GREY,
} from '../constants/color';

type Props = {
  selectedIndex: number;
  isTextShown: boolean;
  isNewTheme: boolean;
  onAddItem: () => void;
  navigateToHome: () => void;
  navigateToNotif: () => void;
  navigateToSettings: () => void;
  navigateToFavorites: () => void;
};

type MenuItemProps = {
  index: number;
  selectedIndex: number;
  icon: string;
  name: string;
  onPress: (index: number) => void;
  isTextShown: boolean;
  isNewTheme: boolean;
};

export function MenuItem(props: MenuItemProps) {
  let {onPress, selectedIndex, index, name, icon, isTextShown, isNewTheme} = props;
  const menuPressed = () => {
    if (onPress) {
      onPress(index);
    }
  };
  let style;
  if (isNewTheme) {
    style = {color: GREY};
  }
  if (selectedIndex === index) {
    style = {color: GREEN};
  }
  let menuText = <Text style={[styles.menuText, style]}>{name}</Text>;
  if (!isTextShown) {
    menuText = <View />;
  }
  return (
    <TouchableOpacity style={styles.menu} onPress={menuPressed}>
      <Icon name={icon} style={[styles.icon, style]} />
      {menuText}
    </TouchableOpacity>
  );
}

class NavBar extends Component {
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    let {selectedIndex, onAddItem, isTextShown, isNewTheme} = this.props;
    let {navigateToHome, navigateToNotif, navigateToSettings} = this.props;
    let {navigateToFavorites} = this.props;
    let black = (isNewTheme) ? null : {backgroundColor: 'black'};
    const addItemPressed = () => {
      if (onAddItem) {
        onAddItem();
      }
    };

    return (
      <View style={[styles.container, black]}>
        <MenuItem
          onPress={navigateToHome}
          selectedIndex={selectedIndex}
          index={0}
          icon="home"
          name="BERANDA"
          isTextShown={isTextShown}
          isNewTheme={isNewTheme}
        />
        <MenuItem
          onPress={navigateToNotif}
          selectedIndex={selectedIndex}
          index={1}
          icon="notifications"
          name="NOTIF"
          isTextShown={isTextShown}
          isNewTheme={isNewTheme}
        />
        <TouchableOpacity style={{marginHorizontal: 10}} onPress={addItemPressed}>
          <View style={styles.addBox}>
            <Icon name="add" style={styles.addIcon} />
          </View>
        </TouchableOpacity>
        <MenuItem
          onPress={navigateToSettings}
          selectedIndex={selectedIndex}
          index={2}
          icon="settings"
          name="SETTINGS"
          isTextShown={isTextShown}
          isNewTheme={isNewTheme}
        />
        <MenuItem
          onPress={navigateToFavorites}
          selectedIndex={selectedIndex}
          index={3}
          icon="star"
          name="FAVORITES"
          isTextShown={isTextShown}
          isNewTheme={isNewTheme}
        />
      </View>
    );
  }

}

export default NavBar;
