// @flow
import React, {Children, cloneElement} from 'react';
import {View} from 'react-native';

import styles from './ButtonRow-style.js';

type Props = {
  children?: ReactNode;
};

export default function ButtonRow(props: Props) {
  let {children} = props;

  let renderChildren = () => {
    return Children.map(children, (child) => {
      let {style} = child.props;
      return cloneElement(child, {
        style: {
          ...style,
          marginLeft: 5,
          marginRight: 5,
        },
      });
    });
  };

  return (
    <View style={styles.buttonRow}>
      {renderChildren()}
    </View>
  );
}
