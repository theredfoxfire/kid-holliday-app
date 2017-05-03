// @flow
const {describe, it} = global;

import React from 'react';
import expect from 'expect';
import LocalizedText from '../LocalizedText';
import Locale from '../../localization/Locale';
import mockLanguages from '../../localization/fixtures/mockLanguages';
import {shallow} from 'enzyme';

describe('LocalizedText', () => {
  let locale = new Locale(mockLanguages, 'en');
  let mockUnsubscribe = expect.createSpy();
  let subscribeSpy = expect.spyOn(locale, 'subscribe').andReturn({
    unsubscribe: mockUnsubscribe,
  });
  it('should render localized text', () => {
    let wrapper = shallow(
      <LocalizedText from="welcome" />,
      {context: {locale: locale}},
    );
    expect(wrapper.context('locale')).toBe(locale);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.at(0).prop('children')).toBe('Welcome');
    expect(subscribeSpy).toHaveBeenCalled();
    wrapper.unmount();
    expect(mockUnsubscribe).toHaveBeenCalled();
    mockUnsubscribe.restore();
  });
});
