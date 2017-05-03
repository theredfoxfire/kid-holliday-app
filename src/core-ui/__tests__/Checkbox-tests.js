const {describe, it} = global;

import React from 'react';
import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';
import {View, Text} from 'react-native';
import {Icon} from '../../core-ui';
import NormalCheckbox, {EnhancedCheckbox} from '../Checkbox';

describe('Checkbox tests', () => {

  it('should renders NormalCheckbox as expected', () => {
    let spy = createSpy();
    let wrapper = shallow(<NormalCheckbox description="awesome" onChange={spy} />);
    expect(wrapper.find(View).length).toBe(2);
    expect(wrapper.find(Text).length).toBe(1);
    expect(wrapper.find(Icon).props().name).toBe('check-box-outline-blank');
    expect(wrapper.find(Text).props().children).toBe('awesome');

    expect(spy).toNotHaveBeenCalled();
    wrapper.find(Icon).simulate('press');
    expect(spy).toHaveBeenCalled();

    wrapper = shallow(<NormalCheckbox isChecked />);
    expect(wrapper.find(Icon).props().name).toBe('check-box');
  });

  it('should renders EnhancedCheckbox as expected', () => {
    let spy = createSpy();
    let wrapper = shallow(<EnhancedCheckbox title="title" description="description" onChange={spy} />);
    expect(wrapper.find(View).length).toBe(3);
    expect(wrapper.find(Text).length).toBe(2);
    expect(wrapper.find(Icon).props().name).toBe('check-box-outline-blank');
    expect(wrapper.find(Text).at(0).props().children).toBe('title');
    expect(wrapper.find(Text).at(1).props().children).toBe('description');

    expect(spy).toNotHaveBeenCalled();
    wrapper.find(Icon).simulate('press');
    expect(spy).toHaveBeenCalled();

    wrapper = shallow(<EnhancedCheckbox isChecked />);
    expect(wrapper.find(Icon).props().name).toBe('check-box');
  });
});
