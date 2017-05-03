// @flow
const {describe, it} = global;

import React from 'react';
import expect from 'expect';
import LanguageProvider from '../LanguageProvider';
import {LocalizedText} from '../../core-ui';
import Locale from '../Locale';
import mockLanguages from '../fixtures/mockLanguages';
import {shallow} from 'enzyme';

describe('LanguageProvider', () => {
  it('should render', () => {
    let wrapper = shallow(
      <LanguageProvider selectedLanguage="en" languages={mockLanguages}>
        <LocalizedText from="welcome" />
      </LanguageProvider>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper.type()).toBe(LocalizedText);
    let {locale} = wrapper.instance().getChildContext();
    expect(locale).toBeA(Locale);
    expect(locale.getLanguage()).toBe('en');
    let onLanguageChange = expect.createSpy();
    let subscription = locale.subscribe(onLanguageChange);
    wrapper.setProps({selectedLanguage: 'id'});
    expect(locale.getLanguage()).toBe('id');
    expect(onLanguageChange.calls.length).toBe(1);
    subscription.unsubscribe();
  });
});
