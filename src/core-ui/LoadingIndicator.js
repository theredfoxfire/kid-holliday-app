// @flow
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {PRIMARY_GREEN} from '../constants/color';

type Props = {
  style?: StyleSet;
  small?: boolean;
  size?: number;
};

export default function LoadingIndicator(props: Props) {
  let size = props.small ? 'small' : 'large';
  size = props.size ? props.size : size;
  return (
    <ActivityIndicator
      animating={true}
      style={[{
        flex: 1,
        padding: 10,
      }, props.style]}
      size={size}
      color={PRIMARY_GREEN}
    />
  );
}
