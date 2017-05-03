// @flow
import React from 'react';
import {View, Text, Image} from 'react-native';
import expect from 'expect';
import {shallow} from 'enzyme';
import ResponsiveImage from '../ResponsiveImage';
import FixedRatioView from '../FixedRatioView';

const {describe, it, beforeEach, afterEach} = global;

describe('ResponsiveImage', () => {
  let spy;

  beforeEach(() => {
    spy = expect.spyOn(Image, 'getSize');
  });

  afterEach(() => {
    spy.restore();
  });

  function LoadingIndicator() {
    return <View />;
  }

  it('should render a FixedRatioView', () => {
    let wrapper = shallow(<ResponsiveImage source={{uri: 'x'}}><Text>Hello</Text></ResponsiveImage>);
    let view = wrapper.find(FixedRatioView);
    expect(view.length).toBe(1);
    expect(view.prop('source')).toEqual({uri: 'x'});
    expect(wrapper.find(View).length).toBe(0);
    expect(wrapper.find(Text).length).toBe(0);
  });

  it('should render a loading indicator', () => {
    let wrapper = shallow(
      <ResponsiveImage source={{uri: 'x'}} renderIndicator={() => <LoadingIndicator />}>
        <Text>Hello</Text>
      </ResponsiveImage>
    );
    expect(wrapper.find(FixedRatioView).length).toBe(1);
    expect(wrapper.find(LoadingIndicator).length).toBe(1);
    expect(wrapper.find(Text).length).toBe(0);
  });

});
