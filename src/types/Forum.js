//@flow

import type {UserLike} from './User';
import type {ImageData} from '../types/ImageData';

export type Forum = {
  id: number;
  name: string;
  slug: string;
  description: string;
};

export type ThreadCategoryState = {
  categories: Map<number, ThreadCategory>;
  subCategories: Map<number, ThreadSubCategory>;
  filterCategories: Map<number, ThreadCategory>;
};

export type EditThread = {
  threadID: number;
  categoryID: number;
  subCategoryID: number;
  title: string;
  description: string;
  photo: ?ImageData;
};

export type CreateThread = {
  categoryID: number;
  subCategoryID: number;
  title: string;
  description: string;
  photo: ?ImageData;
};

export type Thread = {
  id: number;
  userID: number;
  firstName: string;
  avatar: ?ImageSource;
  avatarFacebook: ?ImageSource;
  premium: boolean;
  categoryName: string;
  subCategoryName: string;
  title: string;
  description: string;
  photo: ?ImageSource;
  photoShare: ?ImageSource;
  createdAt: string;
  comments?: Map<number, Comment>;
  commentCount: number;
  likeCount: number;
  totalView: number;
  userLikes: Array<UserLike>;
  date: string; // # days ago
  latestComment: LatestComment;
  sticky?: boolean;
  slug: string; // NOTE: this will be needed when sharing, this is the part
};

export type LatestComment = {
  id: number;
  forumID: number;
  userID: number;
  firstName: string;
  premium: boolean;
  post: string;
  createdAt: string;
  updatedAt: string;
  date: string;
};

export type ThreadCategory = {
  id: number;
  forumName: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
};

export type ThreadSubCategory = {
  id: number;
  categoryID: number;
  subCategoryName: string;
  createdAt: string;
  updatedAt: string;
};

export type ForumItem = {
  id: number;
  name: string;
  slug: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
};

export type Comment = {
  id: number;
  forumID: number;
  userID: number;
  firstName: string;
  avatar: ?ImageSource;
  avatarFacebook: ?ImageSource;
  premium: boolean;
  post: string;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  userLikes: Array<UserLike>;
};

export type Group = {
  id: number;
  userID: number;
  firstName: string;
  avatar: ImageSource;
  avatarFacebook: ImageSource;
  groupName: string;
  groupDescription: string;
  groupMemberCount: number;
  groupTopicCount: number;
  groupImage: ImageSource;
  groupImageThumbnail: ImageSource;
  createdAt: string;
  updatedAt: string;
  provinceID: ?number;
  cityID: ?number;
  subdistrictID: ?number;
  villageID: ?number;
  groupCategory: 'joined' | 'not-joined' | 'invite';
  statusRequest: boolean;
  members: Array<GroupMember>;
  threads: Array<Thread>;
};

export type GroupMember = {
  id: number;
  firstName: string;
  avatar: ImageSource;
  avatarFacebook: ImageSource;
  address: string;
  provinceName: string;
  cityName: string;
};

export type GetAllForums = {
  data: Array<ForumItem>;
};

export type Like = Object;
