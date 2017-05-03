// @flow
import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import {Icon, IconEntypo, IconFA} from '../core-ui';

import styles from './Button-style';

type Props = {
  text?: string;
  icon?: string;
  iconEntypo?: string;
  inverted?: boolean;
  style?: StyleSet;
  textStyle?: StyleSet;
  iconStyle?: StyleSet;
  children?: ReactNode;
  onPress?: () => void;
};

export default function Button(props: Props) {
  let {text, icon, iconEntypo, inverted, style, textStyle, iconStyle, children, onPress, ...otherProps} = props;
  let buttonStyle = [styles.button];
  let buttonTextStyle = [styles.text];
  let buttonIconStyle = [styles.text, styles.icon];

  if (inverted) {
    buttonStyle.push(styles.invertedButton);
    buttonTextStyle.push(styles.invertedText);
  }
  buttonStyle.push(style);
  buttonTextStyle.push(textStyle);
  buttonIconStyle.push(iconStyle);

  let renderLabel = () => {
    let label = [];
    if (icon) {
      label.push(
        <Icon key="icon" name={icon} style={buttonIconStyle} />
      );
    }
    if (iconEntypo) {
      label.push(
        <IconEntypo key="icon" name={iconEntypo} style={buttonIconStyle} />
      );
    }
    if (text) {
      label.push(<Text key="text" style={[buttonTextStyle]}>{text}</Text>);
    }
    return label;
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} {...otherProps}>
      {children ? children : renderLabel()}
    </TouchableOpacity>
  );
}
