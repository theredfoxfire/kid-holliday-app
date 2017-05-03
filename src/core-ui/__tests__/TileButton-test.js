// @flow
let {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {
  View,
  Text,
  Image,
} from 'react-native';

import TileButton from '../TileButton';
import FlatButton from '../FlatButton';

import image from '../images/karsa-01.png';

describe('TileButton test', () => {
  let spy = expect.createSpy();
  let horizontalWrapper = shallow(
    <TileButton
      onPress={spy}
      isHorizontal={true}
      tileName="P P A P"
      image={image}
    />);
  let verticalWrapper = shallow(
    <TileButton
      onPress={spy}
      tileName="P P A P"
      image={image}
    />);
  it('Should Render the right number of View', () => {
    // expect(horizontalWrapper.find(View).length).toBe(2);
    expect(verticalWrapper.find(View).length).toBe(1);
  });
  it('Should Render the right number of Text', () => {
    expect(horizontalWrapper.find(Text).length).toBe(2);
    expect(verticalWrapper.find(Text).length).toBe(1);
  });
  it('Should render the Image', () => {
    expect(horizontalWrapper.find(Image).length).toBe(1);
    expect(verticalWrapper.find(Image).length).toBe(1);
  });
  it('Should render FlatButton', () => {
    expect(horizontalWrapper.find(FlatButton).length).toBe(1);
    expect(verticalWrapper.find(FlatButton).length).toBe(1);
    let click = horizontalWrapper.find(FlatButton).simulate('press');
    expect(click.length).toBe(1);
    expect(spy.calls.length).toBe(1);
    let click2 = verticalWrapper.find(FlatButton).simulate('press');
    expect(click2.length).toBe(1);
    expect(spy.calls.length).toBe(2);
  });
});
