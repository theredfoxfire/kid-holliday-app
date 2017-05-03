// @flow

const {describe, it} = global;

import React from 'react';
import {View, Text} from 'react-native';
import expect from 'expect';
import {shallow} from 'enzyme';

import TextCard from '../TextCard';

describe('TextCard test', () => {
  let wrapper = shallow(
    <TextCard
      title="Asd"
      textItems={['1', '2', '3']}
    />
  );
  it('Should render the right amount of text component', () => {
    expect(wrapper.find(Text).length).toBe(4);
  });
  it('Should render the right amount of View Component', () => {
    expect(wrapper.find(View).length).toBe(1);
  });
});
