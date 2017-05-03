//@flow
const {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect, {createSpy} from 'expect';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from '../../core-ui';
import Dropdown, {OptionsModal} from '../Dropdown';

describe('Dropdown tests', () => {
  let onSelect = createSpy();
  let dropProps = {
    defaultValue: {value: 5, label: 'Serpong'},
    options: [
      {value: 1, label: 'Bandung'},
      {value: 2, label: 'Surabaya'},
      {value: 3, label: 'Palembang'},
      {value: 4, label: 'Jakarta'},
    ],
    selectedValue: 5,
    onSelect,
    isShowingOptions: true,
    label: 'Kota Anda',
    animationType: 'none',
  };

  it('should renders Dropdown', () => {
    let wrapper = shallow(<Dropdown {...dropProps} />);
    expect(wrapper.find(Text).length).toBe(2);
    expect(wrapper.find(TouchableOpacity).length).toBe(1);
    expect(wrapper.find(View).length).toBe(2);
    expect(wrapper.find(Icon).length).toBe(1);
    expect(wrapper.find(OptionsModal).length).toBe(1);

    let dropdownWrapper = wrapper.find(OptionsModal).shallow().find(ScrollView).children();
    expect(dropdownWrapper.length).toBe(4);
    expect(dropdownWrapper.at(0).props().children[0].props.children).toBe('Bandung');
    expect(dropdownWrapper.at(1).props().children[0].props.children).toBe('Surabaya');
    expect(dropdownWrapper.at(2).props().children[0].props.children).toBe('Palembang');

    expect(onSelect).toNotHaveBeenCalled();
    dropdownWrapper.at(0).simulate('press');
    expect(onSelect).toHaveBeenCalled();
    expect(onSelect.calls[0].arguments[0]).toEqual(1);

    dropProps = {
      defaultValue: {value: 5, label: 'Serpong'},
      options: [
        {value: 1, label: 'Bandung'},
        {value: 2, label: 'Surabaya'},
        {value: 3, label: 'Palembang'},
        {value: 4, label: 'Jakarta'},
      ],
      selectedValue: 5,
      onSelect,
      animationType: 'none',
    };
    wrapper = shallow(<Dropdown {...dropProps} />);
    expect(wrapper.find(Text).at(0).props().children).toBe(undefined);
  });
});
