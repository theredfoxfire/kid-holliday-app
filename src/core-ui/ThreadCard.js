// @flow
import React from 'react';
import styles from './ThreadCard-style';
import datePrettify from '../helpers/datePrettify';
import thumbtack from '../images/thumbtack.png';

import {View, Text, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';
import {Icon, LoadingIndicator, ResponsiveImage, ReportDropdown} from '../core-ui';

import type {Thread, LatestComment} from '../types/Forum';

type Props = {
  thread: Thread;
  isLiked: boolean;
  isOwn?: boolean;
  isLikeThreadLoading?: boolean;
  isDetail?: boolean;
  onCardPress?: () => void;
  onLikePress: () => void;
  onCommentPress?: () => void;
};

export default function ThreadCard(props: Props) {
  let {thread, isLiked, isDetail, isOwn, isLikeThreadLoading, onCardPress, onLikePress, onCommentPress} = props;
  let {
    userID, firstName, avatar, avatarFacebook, premium, categoryName, subCategoryName,
    title, description, photo, photoShare, createdAt, commentCount, likeCount, totalView,
    latestComment, id, sticky,
  } = thread;
  let creator = {userID, name: firstName, avatar, avatarFacebook, premium};
  let content = {
    title, photo, photoShare, categoryName, subCategoryName, latestComment, likeCount, commentCount,
    totalView, description, isDetail, id, isOwn,
  };
  let commentPress = () => {
    if (onCommentPress) {
      onCommentPress();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={onCardPress}>
      <View style={styles.root}>
        <Header creator={creator} createdAt={createdAt} sticky={sticky} />
        <Content {...content} />
        <Footer onLikePress={onLikePress} isLiked={isLiked} onCommentPress={commentPress} isLikeThreadLoading={isLikeThreadLoading} />
      </View>
    </TouchableWithoutFeedback>
  );
}

type HeaderProps = {
  creator: {
    userID: number;
    name: string;
    avatar: ?ImageSource;
    avatarFacebook: ?ImageSource;
    premium: boolean;
  };
  createdAt: string;
  sticky: ?boolean;
};

export function Header(props: HeaderProps) {
  let {creator, createdAt, sticky} = props;
  let {name, avatar, avatarFacebook} = creator;
  let userAvatar;
  if (avatar != null) {
    userAvatar = (
      <Image
        resizeMethod="resize"
        style={styles.thumbnailPicture}
        source={avatar}
      />
    );
  } else if (avatarFacebook != null) {
    userAvatar = (
      <Image
        resizeMethod="resize"
        style={styles.thumbnailPicture}
        source={avatarFacebook}
      />
    );
  }
  let stickySign;
  if (sticky) {
    stickySign = (
      <View style={styles.center}>
        <Image source={thumbtack} style={styles.thumbtack} resizeMethod="resize" />
      </View>
    );
  }
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.header}>
        <View>
          {userAvatar}
        </View>
        <View style={styles.headingWrapper}>
          <Text style={styles.creatorName}>{name}</Text>
          <Text>{datePrettify(createdAt)}</Text>
        </View>
        {stickySign}
      </View>
      <View style={styles.divider} />
    </View>
  );
}

type ContentProps = {
  title: string;
  description: string;
  photo: ?ImageSource;
  photoShare: ?ImageSource;
  categoryName: string;
  subCategoryName: string;
  latestComment: LatestComment;
  likeCount: number;
  commentCount: number;
  totalView: number;
  isDetail?: boolean;
  id: number;
  isOwn?: boolean;
};

export function Content(props: ContentProps) {
  let {
    title, description, categoryName, subCategoryName, latestComment, likeCount, commentCount,
    totalView, photo, photoShare, isDetail, id, isOwn,
  } = props;
  let lastComment = (
    <Text style={styles.lastCommentResult}>
      Belum ada komentar
    </Text>
  );
  if (latestComment) {
    let {firstName, date} = latestComment;
    lastComment = (
      <Text style={styles.lastCommentResult}>
        <Text style={styles.greenFont}>{firstName}</Text>, pada {date}
      </Text>
    );
  }
  let image;
  let source;
  if (photo) {
    if (!Array.isArray(photo) && typeof photo === 'object') {
      source = {uri: photo.uri};
    }
  }
  if (photoShare) {
    if (!Array.isArray(photoShare) && typeof photoShare === 'object') {
      source = {uri: photoShare.uri};
    }
  }
  if (source) {
    image = (
      <View style={styles.picture}>
        <ResponsiveImage
          renderIndicator={() => <LoadingIndicator />}
          source={source}
          resizeMethod="resize"
        />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text>{isDetail ? description : null}</Text>
      </View>
      {image}
      <View style={styles.contentFooterWrapper}>
        {
          !isDetail ? (
            <View>
              <View style={styles.categoryWrapper}>
                <Text style={styles.categoryText}>Kategori: </Text>
                <Text style={styles.greenFont}>{categoryName}, {subCategoryName}</Text>
              </View>
              <View style={styles.lastCommentWrapper}>
                <Text style={styles.categoryText}>Balasan Terakhir:
                  {' '}{lastComment}
                </Text>
              </View>
            </View>
          ) : null
        }
        {
          isDetail && !isOwn ? (
            <View style={styles.reportRow}>
              <View style={styles.spacer} />
              <ReportDropdown threadID={id} />
            </View>
          ) : null
        }
        <View style={styles.engageWrapper}>
          <View style={styles.amount}>
            <Icon name="thumb-up" style={styles.amountIcon} />
            <Text style={styles.amountFont}>Suka {likeCount.toString()}</Text>
          </View>
          <View style={styles.amount}>
            <Icon name="comment" style={styles.amountIcon} />
            <Text style={styles.amountFont}>Komentar {commentCount.toString()}</Text>
          </View>
          <View style={styles.amount}>
            <Icon name="visibility" style={styles.amountIcon} />
            <Text style={styles.amountFont}>Dilihat {totalView.toString()}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

type FooterProps = {
  onLikePress: () => void;
  isLiked: boolean;
  isLikeThreadLoading?: boolean;
  onCommentPress: () => void;
};

export function Footer(props: FooterProps) {
  let {onLikePress, onCommentPress, isLiked, isLikeThreadLoading} = props;
  let hitSlop = {top: 10, bottom: 10, left: 10, right: 10};
  let thumbUp;
  if (isLikeThreadLoading) {
    thumbUp = (
      <View style={{flex: 1}}>
        <LoadingIndicator style={{padding: -1}} small />
      </View>
    );
  } else if (isLiked) {
    thumbUp = (
      <View style={styles.footerItemWrapper}>
        <Icon name="thumb-up" style={styles.actionIconLiked} />
        <Text style={styles.actionFontLiked}>Suka</Text>
      </View>);
  } else {
    thumbUp = (
      <View style={styles.footerItemWrapper}>
        <Icon name="thumb-up" style={styles.actionIcon} />
        <Text style={styles.actionFont}>Suka</Text>
      </View>);
  }
  return (
    <View style={styles.footerWrapper}>
      <TouchableOpacity style={styles.actionWrapper} onPress={onLikePress} hitSlop={hitSlop}>
        {thumbUp}
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionWrapper} onPress={onCommentPress} hitSlop={hitSlop}>
        <View style={styles.footerItemWrapper}>
          <Icon name="comment" style={styles.actionIcon} />
          <Text style={styles.actionFont}>Komentar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
