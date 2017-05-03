// @flow

import {
  View,
  ScrollView,
} from 'react-native';
import React, {Children} from 'react';

import styles from './GenericListView-style';

type Props = {
  children?: ReactNode;
};
type ItemProps = {
  item: ReactNode;
};

export default function GenericListView(props: Props) {
  let {children} = props;
  if (Children.count(children) !== 0) {
    return (
      <ScrollView style={styles.root}>
        {Children.map(children, (child) => {
          return (
            <ListItem item={child} />
          );
        })}
      </ScrollView>
    );
  }
}

export function ListItem(props: ItemProps) {
  let {item} = props;
  return (
    <View style={styles.listItem}>{item}</View>
  );
}
