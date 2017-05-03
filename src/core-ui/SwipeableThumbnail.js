// @flow
import React, {Children} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';

import styles from './SwipeableThumbnail-style';

type Props = {
  children?: ReactNode;
};

export default function SwipeableThumbnail(props: Props) {
  let {children} = props;

  let renderChildren = () => {
    return Children.map(children, (child) => {
      let {style, onPress} = child.props;
      let touchableStyle = [styles.touchable, style];
      return (
        <TouchableOpacity
          style={touchableStyle}
          onPress={onPress}
        >
          {child}
        </TouchableOpacity>
      );
    });
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {renderChildren()}
    </ScrollView>
  );
}
