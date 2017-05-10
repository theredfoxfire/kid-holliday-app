// @flow
import type {User, TempProfile, UpdatePassword, UserLike} from '../types/User';
import type {AnalyticForm} from '../types/Analytic';
import type {ImageData} from './ImageData';
import type {GPSAddress, Coordinates} from './Location';
import type {Activity} from '../types/Activity';

export type Action = {
  type: 'LANGUAGE_SELECTED';
  language: string;
} | {
  type: 'LOGIN';
  userAuth: {
    email: string;
    password: string;
  };
} | {
  type: 'LOGIN_SUCCESS';
  currentUser: User;
} | {
  type: 'RESET_ROUTE';
  key: string;
} | {
  type: 'PUSH_ROUTE';
  key: string;
  props?: Object;
} | {
  type: 'POP_ROUTE';
} | {
  type: 'LOGOUT';
} | {
  type: 'LOGOUT_SUCCESS';
} | {
  type: 'ADD_PHOTO_POST';
  addPhoto: GalleryData;
} | {
  type: 'PICK_PHOTO';
  image: any;
} | {
  type: 'GUEST_LOGIN';
} | {
  type: 'FACEBOOK_LOGIN';
} | {
  type: 'FACEBOOK_LOGIN_ERROR';
} | {
  type: 'FACEBOOK_LOGIN_CANCEL';
} | {
  type: 'FETCH_GPS_ADDRESS_REQUESTED';
  coordinates: Coordinates;
} | {
  type: 'FETCH_GPS_ADDRESS_SUCCESS';
  gpsAddress: GPSAddress;
} | {
  type: 'OPEN_DRAWER';
  isDrawerOpen?: boolean;
} | {
  type: 'UPDATING_APP';
} | {
  type: 'UPDATE_FINISHED';
} | {
  type: 'DOWNLOAD_PROGRESS_UPDATED';
  downloadProgress: number;
  totalDownloadSize: number;
} | {
  type: 'FETCH_TODO';
  username: string;
} | {
  type: 'FETCH_TODO_SUCCESS';
  todo: {};
} | {
  type: 'FETCH_SEARCH_NAME';
  name: string;
} | {
  type: 'FETCH_SEARCH_NAME_SUCCESS';
  searchNameResult: {};
} | {
  type: 'SAVE_ACTIVITIES';
  activities: Array<Activity>;
};
