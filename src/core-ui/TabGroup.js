// @flow
import React, {Children} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import styles from './TabGroup-style';

type TabGroupProps = {
  children?: ReactNode;
  styling: 'primary' | 'secondary';
  scrollable?: boolean;
};

type TabProps = {
  title: string;
  selectedIndex?: boolean;
  onSelect?: () => void;
  children?: ReactNode;
};

export default function TabGroup(props: TabGroupProps) {
  let {children, styling, scrollable} = props;
  let tabBarChildren = [];
  Children.forEach(children, (child: {type: mixed; props: TabProps}, i: number) => {
    if (child.type === Tab) {
      let {title, onSelect, selectedIndex} = child.props;
      tabBarChildren.push(
        <TouchableOpacity
          key={i}
          style={[
            scrollable ? [styles.tabBarItem, {flex: 0}] : styles.tabBarItem,
            styling === 'secondary' ? styles.tabBarSecondary : null,
          ]}
          onPress={() => {
            if (onSelect != null) {
              onSelect();
            }
          }}
        >
          <View style={styles.titleWrapper}>
            <Text style={[styles.titleText, styling === 'secondary' ? styles.titleTextSecondary : null]}>
              {title}
            </Text>
          </View>
          {selectedIndex ? (
            <View style={styles.selectedTabBarWrapper}>
              <View style={[styles.selectedIndicator, styling === 'secondary' ?
                  styles.selectedIndicatorSecondary : null]}
              />
            </View>
            ) : null
          }
        </TouchableOpacity>
      );
    }
  });
  let header = scrollable ? (
    <ScrollView style={[styles.tabBar, {flex: 0, maxHeight: 46}]} horizontal showsHorizontalScrollIndicator={false}>
      {tabBarChildren}
    </ScrollView>
  ) : (
    <View style={styles.tabBar}>
      {tabBarChildren}
    </View>
  );
  return (
    <View style={styles.tabGroup}>
      {header}
      <View style={styles.tabContent}>
        {children}
      </View>
    </View>
  );
}

export function Tab(props: TabProps) {
  let {children, selectedIndex} = props;
  if (!selectedIndex) {
    return null;
  }
  return (
    <View style={styles.tabContent}>
      {children}
    </View>
  );
}
