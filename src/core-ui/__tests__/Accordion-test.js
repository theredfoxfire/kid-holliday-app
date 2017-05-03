// @flow
let {describe, it} = global;

import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {View} from 'react-native';
import {Accordion, AccordionContent} from '../../core-ui';

describe('Accordion', () => {
  it('should render stuff properly', () => {
    let onPress = createSpy();
    let wrapper = shallow(
      <Accordion title="Foo" isCollapsed={true} onPress={onPress}>
        <AccordionContent>
          <View />
        </AccordionContent>
      </Accordion>
    );
    expect(wrapper.find('View').length).toBe(3);
    expect(wrapper.find('Text').length).toBe(1);
    expect(wrapper.find('Icon').length).toBe(1);
    expect(wrapper.find('Collapsible').length).toBe(1);
    let touchable = wrapper.find('TouchableOpacity');
    touchable.simulate('press');
    expect(touchable.length).toBe(1);
    expect(onPress).toHaveBeenCalled();
  });

  it('should render AccordrionContent properly', () => {
    let wrapper = shallow(
      <AccordionContent>
        <View />
      </AccordionContent>
    );
    expect(wrapper.find('View').length).toBe(2);
  });
});
