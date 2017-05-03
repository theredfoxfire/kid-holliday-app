//@flow
const {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {Text, TextInput, View} from 'react-native';
import {Icon} from '../../core-ui';
import TextField from '../TextField';
import Button from '../Button';

describe('TextField tests', () => {
  it('should renders SearchInput', () => {
    let wrapper = shallow(<TextField placeholder="Cari Kota Anda" />);
    expect(wrapper.find(TextInput).length).toBe(1);
    expect(wrapper.find(View).length).toBe(2);
  });
  it('should renders TextField with label', () => {
    let wrapper = shallow(<TextField placeholder="Cari Kota Anda" iconName="search" label="Kota Anda" />);
    expect(wrapper.find(Text).length).toBe(1);
    expect(wrapper.find(TextInput).length).toBe(1);
    expect(wrapper.find(View).length).toBe(3);
    expect(wrapper.find(Icon).length).toBe(1);
  });
  it('should renders TextField with icon', () => {
    let wrapper = shallow(<TextField placeholder="Cari Kota Anda" iconName="search" />);
    expect(wrapper.find(TextInput).length).toBe(1);
    expect(wrapper.find(View).length).toBe(2);
    expect(wrapper.find(Icon).length).toBe(1);
  });
  it('should renders TextField with button', () => {
    let wrapper = shallow(<TextField placeholder="Cari Kota Anda" buttonLabel="search" />);
    expect(wrapper.find(TextInput).length).toBe(1);
    expect(wrapper.find(View).length).toBe(2);
    expect(wrapper.find(Button).length).toBe(1);
  });
});
