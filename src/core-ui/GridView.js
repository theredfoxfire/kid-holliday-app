// @flow

import React from 'react';
import {
  View,
  ListView,
} from 'react-native';
import styles from './GridView-style';
import listViewDataSource from '../helpers/listViewDataSource';

type Props = {
  items: Array<any>;
  itemsPerRow: number;
  renderItem: (data: any, index: number) => ReactNode;
  style?: StyleSet;
};

export default function GridView(props: Props) {
  let {items, itemsPerRow, renderItem, style, ...otherProps} = props;
  let dataSource = groupItems(items, itemsPerRow);
  const ds = listViewDataSource();
  const renderRow = (rowData) => {
    let rows = rowData.map(renderItem);
    while (rows.length < itemsPerRow) {
      // TODO: hacky way to adjust to Product Card's / Detail's flex with rows that have
      //       less than "itemsPerRow" items.
      rows.push(<View key={`spacer${rows.length}`} style={styles.spacer} />);
    }
    return (
      <View style={styles.rowWrapper}>
        {rows}
      </View>
    );
  };
  return (
    <ListView
      dataSource={ds.cloneWithRows(dataSource)}
      renderRow={renderRow}
      style={style}
      enableEmptySections
      {...otherProps}
    />
  );
}

export function groupItems(items: Array<any>, itemsPerRow: number): Array<any> {
  let dataSource = [];
  let group = [];
  items.forEach((item) => {
    if (group.length === itemsPerRow) {
      dataSource.push(group);
      group = [item];
    } else {
      group.push(item);
    }
  });
  if (group.length > 0) {
    dataSource.push(group);
  }
  return dataSource;
}
