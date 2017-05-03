// @flow
let {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import {TouchableOpacity} from 'react-native';
import UploadButtons from '../UploadButtons';

describe('UploadButtons', () => {
  it('should have two TouchableOpacity instances', () => {
    const wrapper = shallow(<UploadButtons />);
    expect(wrapper.find(TouchableOpacity).length).toEqual(2);
  });
});
