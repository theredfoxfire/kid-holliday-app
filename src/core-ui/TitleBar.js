// @flow

import React, {Children, Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import BurgerButtonContainer from '../containers/BurgerButtonContainer';
import styles from './TitleBar-style';
import {IconButton, Icon} from '../core-ui';
import ModalPicker from 'react-native-modal-picker';

type Props = {
  style?: StyleSet;
  children?: ReactNode;
  title: string;
  iconName?: string;
  rightIcon?: string;
  onRighIconPress?: () => void;
  onIconButtonPress?: () => void;
  optionData?: Array<any>;
};

export default class TitleBar extends Component {
  props: Props;

  render() {
    let {style, children, title, onIconButtonPress, iconName, rightIcon, onRighIconPress, optionData} = this.props;
    const leftIcon = iconName ? <IconButton containerStyle={styles.leftIcon} icon={iconName} onPress={() => onIconButtonPress ? onIconButtonPress() : null} /> : <BurgerButtonContainer />;
    const rightIconComponent = rightIcon ?
        <Icon name={rightIcon} style={styles.icon} />
      : null;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.block}>
          <View style={styles.logo}>
            {leftIcon}
          </View>
          <Text style={styles.title}>{title}</Text>
          {Children.count(children) !== 0 ? children : null}
          <ModalPicker
            data={optionData}
            initValue=""
            onChange={() => {}} >
            <View style={styles.rightIcon}>
              {rightIconComponent}
            </View>
          </ModalPicker>
        </View>
      </View>
    );
  }
}
