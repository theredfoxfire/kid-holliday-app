// @flow

import React, {Children} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './ItemList-style';

export default function ItemList({children}: {children?: ReactNode}) {
  return (
    <View style={styles.root}>
      {children}
    </View>
  );
}
type HeaderProps = {
  children?: ReactNode;
  title?: string;
  onPress?: () => void;
};
export function ItemHeader({children, title}: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      {children}
    </View>
  );
}
export function ItemHeaderWithLink({children, title, onPress}: HeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress} style={styles.headerLink}>
        <Text style={styles.headerTitleLink}>{title ? title.toUpperCase() : null}</Text>
      </TouchableOpacity>
      {children}
    </View>
  );
}
export function ItemContent({children}: {children?: ReactNode}) {
  return (
    <View style={styles.content}>
      {Children.map(children, (child) => (
        <View style={styles.contentWrapper}>
          {child}
        </View>
      ))}
    </View>
  );
}
