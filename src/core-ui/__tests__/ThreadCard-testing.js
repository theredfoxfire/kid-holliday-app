//@flow

const {describe, it} = global;

import React from 'react';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {shallow} from 'enzyme';
import expect, {createSpy} from 'expect';
import ThreadCard, {Header, Content, Footer} from '../ThreadCard';

import karsaLogo from '../images/karsa_logo.png';

describe('Thread Card', () => {
  let onCardPress = createSpy();
  let onLikePress = createSpy();
  let onCommentPress = createSpy();
  let onCategoryClick1 = createSpy();
  let onCategoryClick2 = createSpy();
  let onLastCommentClick = createSpy();

  let mockProps = {
    thread: {
      id: 1,
      userID: 1,
      firstName: 'Bagus Andrianto',
      premium: false,
      userLikes: [],
      photo: null,
      photoShare: null,
      description: 'Berikan pupuk super.',
      date: '2 hari yang lalu',
      avatar: null,
      avatarFacebook: null,
      createdAt: '8 Oktober 2016, 15:30',
      title: 'Cara menanam tanaman dengan cepat dan efektif.',
      picture: karsaLogo,
      slug: '',
      categoryName: 'Bla',
      subCategoryName: 'Foo',
      latestComment: {
        id: 1,
        forumID: 1,
        userID: 1,
        firstName: 'Ismadi Surya',
        post: 'asdf',
        date: '22 Oktober 2016',
        createdAt: '',
        updatedAt: '',
        premium: false,
      },
      likeCount: 0,
      commentCount: 0,
      totalView: 0,
    },
    onCardPress,
    onLikePress,
    onCommentPress,
    isLiked: true,
    isDetail: true,
  };

  let wrapper = shallow(<ThreadCard {...mockProps} />);
  let headerWrapper = wrapper.find(Header).shallow();
  let contentWrapper = wrapper.find(Content).shallow();
  let footerWrapper = wrapper.find(Footer).shallow();

  it('shoud render card', () => {
    expect(wrapper.find(TouchableWithoutFeedback).length).toBe(1);
    expect(wrapper.find(Header).length).toBe(1);
    expect(wrapper.find(Content).length).toBe(1);
    expect(wrapper.find(Footer).length).toBe(1);
    expect(wrapper.find(View).length).toBe(1);
  });

  it('should render header correctly', () => {
    expect(headerWrapper.find(View).length).toBe(5);
    expect(headerWrapper.find(Text).length).toBe(2);
  });

  it('should render content correctly', () => {
    expect(contentWrapper.find(View).length).toBe(9);
    expect(contentWrapper.find(Text).length).toBe(5);
  });

  it('should render footer correctly', () => {
    expect(footerWrapper.find(View).length).toBe(3);
    expect(footerWrapper.find(TouchableOpacity).length).toBe(2);
  });

  it('should trigger function handlers as expected', () => {
    let contentWrapper = wrapper.find(Content).shallow();
    expect(onCategoryClick1).toNotHaveBeenCalled();
    contentWrapper.find(View).at(4).find(Text).at(1).simulate('press');

    expect(onCategoryClick2).toNotHaveBeenCalled();
    contentWrapper.find(View).at(4).find(Text).at(2).simulate('press');

    expect(onLastCommentClick).toNotHaveBeenCalled();
    contentWrapper.find(View).at(6).children().find(Text).at(1).simulate('press');

    let footerWrapper = wrapper.find(Footer).shallow();
    expect(onLikePress).toNotHaveBeenCalled();
    footerWrapper.find(TouchableOpacity).first().simulate('press');
    expect(onLikePress).toHaveBeenCalled();

    expect(onCommentPress).toNotHaveBeenCalled();
    footerWrapper.find(TouchableOpacity).last().simulate('press');
    expect(onCommentPress).toHaveBeenCalled();
  });

  it('should render props correctly', () => {
    expect(headerWrapper.find(View).at(3).find(Text).first().props().children).toBe('Bagus Andrianto');
    expect(headerWrapper.find(View).at(3).find(Text).last().props().children).toBe('8 Oktober 2016, 15:30');

    let getContentView = contentWrapper.find(View);
    expect(getContentView.at(1).children().at(0).props().children).toBe('Cara menanam tanaman dengan cepat dan efektif.');
    expect(getContentView.at(1).children().at(1).props().children).toBe('Berikan pupuk super.');

    expect(getContentView.at(6).children().last().props().children[1]).toBe('0');
    expect(getContentView.at(7).children().last().props().children[1]).toBe('0');
    expect(getContentView.at(8).children().last().props().children[1]).toBe('0');
  });
});
