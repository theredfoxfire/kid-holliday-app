// @flow
import React from 'react';
import {View, Text} from 'react-native';
import styles from './Dialog-style';
import {Icon, Button, LoadingIndicator} from '../core-ui';

type Props = {
  title?: string;
  children?: ReactNode;
  buttonText?: string;
  flexContent?: boolean;
  buttonLoading?: boolean;
  onClose?: () => void;
  onSubmit?: (data: any) => void;
};

export default function Dialog(props: Props) {
  let {
    title,
    children,
    onClose,
    onSubmit,
    buttonText,
    buttonLoading,
    flexContent,
    ...otherProps
  } = props;

  let button;
  if (buttonLoading) {
    button = (
      <Button inverted>
        <LoadingIndicator style={{padding: 0}} small />
      </Button>
    );
  } else if (buttonText) {
    button = (
      <Button text={buttonText} onPress={onSubmit} />
    );
  }

  return (
    <View style={styles.root} {...otherProps}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.clearWrapper}>
          <Icon name="clear" style={styles.clear} onPress={onClose} />
        </View>
      </View>
      <View style={[styles.contentWrapper, flexContent ? {flex: 1} : null]}>
        {children}
      </View>
      {button}
    </View>
  );
}
