// @flow
import React, {Component, PropTypes} from 'react';
import {Text} from 'react-native';
import autobind from 'class-autobind';

import type Locale from '../localization/Locale';

type Props = {
  from: string;
  upperCase?: boolean;
};

type Context = {
  locale: Locale;
};

class LocalizedText extends Component {
  props: Props;
  context: Context;
  _subscription: {unsubscribe: () => void};

  static contextTypes = {
    locale: PropTypes.object,
  };

  constructor(props: Props, context: Context) {
    super(...arguments);
    autobind(this);
    this._subscription = context.locale.subscribe(
      () => this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this._subscription.unsubscribe();
  }

  render() {
    let {from: fromString, upperCase, ...otherProps} = this.props;
    let content = '';
    if (fromString) {
      content = this.context.locale.getMessage(fromString);
    }
    if (upperCase) {
      content = content.toUpperCase();
    }
    return <Text {...otherProps}>{content}</Text>;
  }
}

export default LocalizedText;
