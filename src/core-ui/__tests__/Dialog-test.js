// @flow
const {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {Text} from 'react-native';
import Dialog from '../Dialog';

describe('Dialog tests', () => {
  it('should renders title', () => {
    let wrapper = shallow(<Dialog title="Awesome Title" />);
    expect(wrapper.find(Text).at(0).props().children).toBe('Awesome Title');
  });

});
