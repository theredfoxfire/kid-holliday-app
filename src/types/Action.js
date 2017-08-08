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
  type: 'FETCH_SEARCH_NAME_DETAIL_SUCCESS';
  searchNameDetailResult: {};
} | {
  type: 'FETCH_SEARCH_NAME_DETAIL';
  id: string;
} | {
  type: 'FETCH_PROMO';
} | {
  type: 'FETCH_PROMO_SUCCESS';
  promo: {};
} | {
  type: 'FETCH_NEARBY';
  latLong: string;
} | {
  type: 'FETCH_NEARBY_SUCCESS';
  nearby: {};
} | {
  type: 'FETCH_NEARBY_DETAIL';
  id: string;
} | {
  type: 'REMOVE_TODO';
  id: string;
  username: string;
} | {
  type: 'POST_NEW_TODO';
  module: string;
  module_id: string;
  user: string;
} | {
  type: 'FETCH_NEARBY_DETAIL_SUCCESS';
  nearbyDetailResult: {};
} | {
  type: 'FETCH_TODO_DETAIL';
  id: string;
  todoType: string;
} | {
  type: 'ACTION_TODO';
  id: string;
  actionTodo: string;
  username: string;
} | {
  type: 'FETCH_TODO_DETAIL_SUCCESS';
  todoDetailResult: {};
} | {
  type: 'FETCH_PROVINCE_SUCCESS';
  province: {};
} | {
  type: 'FETCH_CITY';
  province: string;
} | {
  type: 'FETCH_CITY_SUCCESS';
  city: {};
} | {
  type: 'SEARCH_NAME_DETAIL';
  placeDetailID: string;
} | {
  type: 'TODO_DETAIL';
  todoDetailID: Object;
} | {
  type: 'NEARBY_DETAIL';
  selectedNearbyID: string;
} | {
  type: 'PROMO_DETAIL';
  selectedPromoID: string;
} | {
  type: 'FETCH_PLACE_BY_CITY';
  province: string;
  city: string;
} | {
  type: 'FETCH_PLACE_BY_CITY_SUCCESS';
  placeByCityResult: {};
} | {
  type: 'SAVE_ACTIVITIES';
  activities: Array<Activity>;
};
