// @flow
let {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {
  Text, View,
} from 'react-native';

import TileButtonWrapper from '../TileButtonWrapper';

describe('TileButtonWrapper test', () => {
  let wrapper = shallow(<TileButtonWrapper><Text>5</Text></TileButtonWrapper>);
  it('Should render the right number of View', () => {
    expect(wrapper.find(View).length).toBe(2);
  });
  it('Should render the children', () => {
    expect(wrapper.find(Text).length).toBe(1);
  });
});
