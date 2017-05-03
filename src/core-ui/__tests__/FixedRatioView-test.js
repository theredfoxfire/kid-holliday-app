// @flow
import React from 'react';
import {View, Text, Image} from 'react-native';
import expect from 'expect';
import {shallow} from 'enzyme';
import FixedRatioView from '../FixedRatioView';

const {describe, it} = global;

describe('FixedRatioView', () => {

  it('should render a View', () => {
    let wrapper = shallow(<FixedRatioView><Text>Hello</Text></FixedRatioView>);
    expect(wrapper.find(View).length).toBe(3);
    expect(wrapper.find(Text).length).toBe(1);
  });

  it('should render a custom element', () => {
    let wrapper = shallow(<FixedRatioView ratio={1} component={Image} source={{uri: 'x'}} />);
    expect(wrapper.find(View).length).toBe(2);
    let image = wrapper.find(Image);
    expect(image.length).toBe(1);
    expect(image.prop('source')).toEqual({uri: 'x'});
  });

});
