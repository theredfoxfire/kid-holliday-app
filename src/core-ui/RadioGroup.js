// @flow
import React from 'react';
import RadioButton from 'react-native-radio-button';
import {View, Text} from 'react-native';
import styles from './RadioGroup-style';

type Props = {
  children?: ReactNode;
};

export default function RadioGroup(props: Props) {
  return (
    <View style={styles.mainWrapper}>
      {props.children}
    </View>
  );
}

type RadioItemProps = {
  isSelected: boolean;
  onSelect: () => void;
  label: string;
  children?: ReactNode;
};

export function RadioItem(props: RadioItemProps) {
  let {children, onSelect, isSelected, label} = props;
  return (
    <View style={styles.innerWrapper}>
      <View style={styles.radioItem}>
        <RadioButton
          animation="bounceIn"
          onPress={onSelect}
          isSelected={isSelected}
          size={10}
          innerColor="#00C853"
          outerColor="grey"
        />
        <Text style={styles.radioText}>{label}</Text>
      </View>
      {children ? children : null}
    </View>
  );
}
