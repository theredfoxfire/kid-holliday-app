// @flow
let {describe, it} = global;

import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import ButtonRow from '../ButtonRow';
import Button from '../Button';

describe('ButtonRow', () => {

  it('should render two buttons', () => {
    let wrapper = shallow(
      <ButtonRow>
        <Button text="Foo" />
        <Button text="Bar" />
      </ButtonRow>
    );
    expect(wrapper.find(Button).length).toBe(2);
  });

  it('should add left right margins to buttons', () => {
    let wrapper = shallow(
      <ButtonRow>
        <Button text="Foo" />
      </ButtonRow>
    );
    let button = wrapper.find(Button);
    expect(button.prop('style').marginLeft > 0).toBe(true);
    expect(button.prop('style').marginRight > 0).toBe(true);
  });

});
