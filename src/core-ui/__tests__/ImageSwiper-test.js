// @flow
const {describe, it} = global;

import React from 'react';
import {View} from 'react-native';
import expect from 'expect';
import {shallow} from 'enzyme';
import Swiper from 'react-native-swiper';
import {ImageSwiper, ImageSlide, ImageSlideOverlay} from '../ImageSwiper';

import image from '../images/karsa-01.png';

describe('ImageSwiper', () => {
  it('should render Image Swiper', () => {
    let wrapper = shallow(<ImageSwiper />);
    expect(wrapper.find('View').length).toBe(1);
    expect(wrapper.find(Swiper).length).toBe(1);
  });

  it('should only accept Image Slide children', () => {
    let wrapper = shallow(
      <ImageSwiper>
        <ImageSlide picture={image} />
        <ImageSlide picture={image} />
        <View />
        <View />
      </ImageSwiper>
    );
    expect(wrapper.find('View').length).toBe(1);
    expect(wrapper.find(Swiper).length).toBe(1);
    expect(wrapper.find(ImageSlide).length).toBe(2);
  });

  it('should render Image Slide', () => {
    let wrapper = shallow(<ImageSlide picture={image} />);
    expect(wrapper.find('View').length).toBe(1);
    expect(wrapper.find('Image').length).toBe(1);
  });

  it('should render Image Slide Overlay', () => {
    let wrapper = shallow(<ImageSlideOverlay title="foo" date="bar" source="baz" />);
    expect(wrapper.find('View').length).toBe(4);
    expect(wrapper.find('Text').length).toBe(3);
  });
});
