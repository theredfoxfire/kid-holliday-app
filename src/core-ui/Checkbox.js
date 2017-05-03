// @flow
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Checkbox-style';
import {Icon} from '../core-ui';

type EnhancedProps = {
  isChecked?: boolean;
  picture?: ImageSource;
  title: string;
  description?: string;
  children?: ReactNode;
  onChange?: () => void;
};

export function EnhancedCheckbox(props: EnhancedProps) {
  let {isChecked, title, description, picture, onChange, children} = props;
  let iconName = (isChecked ? 'check-box' : 'check-box-outline-blank');

  return (
    <View style={styles.root}>
      <Icon name={iconName} style={styles.checkBox} onPress={onChange} />
      <View>
        <Image style={styles.picture} source={picture} />
      </View>
      <View style={styles.description}>
        <Text style={styles.enhancedTitle}>{title}</Text>
        <Text>{description}</Text>
        {children}
      </View>
    </View>
  );
}

type NormalProps = {
  isChecked?: boolean;
  description?: string;
  children?: ReactNode;
  onChange?: () => void;
};

export default function NormalCheckbox(props: NormalProps) {
  let {isChecked, description, onChange, children} = props;
  let iconName = (isChecked ? 'check-box' : 'check-box-outline-blank');

  return (
    <View style={styles.root}>
      <Icon name={iconName} style={styles.checkBox} onPress={onChange} />
      <View style={styles.description}>
        <Text style={styles.normalDescription}>{description}</Text>
        {children}
      </View>
    </View>
  );
}
