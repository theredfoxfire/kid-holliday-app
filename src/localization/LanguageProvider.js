// @flow
import {Component, Children, PropTypes} from 'react';
import Locale from './Locale';
import type {Languages} from './Locale';

type Props = {
  selectedLanguage: string;
  languages: Languages;
  children?: ReactNode;
};

class LanguageProvider extends Component {
  props: Props;
  _locale: Locale;

  static childContextTypes = {
    locale: PropTypes.object,
  };

  getChildContext() {
    return {locale: this._locale};
  }

  constructor(props: Props) {
    super(...arguments);
    let {selectedLanguage, languages} = props;
    this._locale = new Locale(languages, selectedLanguage);
  }

  componentWillReceiveProps(newProps: Props) {
    let oldProps = this.props;
    if (oldProps.selectedLanguage !== newProps.selectedLanguage) {
      this._locale.setLanguage(newProps.selectedLanguage);
    }
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default LanguageProvider;
