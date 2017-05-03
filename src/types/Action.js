// @flow
import type {OfficeData, EmailMessage} from './Office';
import type {About, PrivacyPolicy} from './About';
import type {CostDetail} from '../types/Cost';
import type {User, TempProfile, UpdatePassword, UserLike} from '../types/User';
import type {Product, ProductDetail, ProductPayload} from './Product';
import type {Forum, Thread, Comment, ThreadCategory, ThreadSubCategory, Group, GroupMember} from './Forum';
import type {MarketPrice} from './MarketPrice';
import type {AnalyticForm} from '../types/Analytic';
import type {Plant, PlantDetailWithPhotos, PlantingInformation, GalleryData} from '../types/Plant';
import type {
  PestDisease, PestDiseaseDetail, PestDiseaseDetailWithCountermeasure, PestDiseaseCommodity,
} from '../types/PestDisease';
import type {Registration} from './Registration';
import type {Option} from '../core-ui/Dropdown';
import type {Favorite} from './Favorite';
import type {ImageData} from './ImageData';
import type {GPSAddress, Coordinates} from './Location';
import type {PlantForm} from './Plant';
import type {Toko} from './NearbyStore';
import type {Notification} from './Notifications';
import type {Highlight} from './Highlight';
import type {PlantingGuide, PlantingGuideDetail} from '../types/PlantingGuide';
import type {Level, GamificationAction, UserGamificationAction, UserScore} from '../types/Gamification';
import type {Reward} from '../types/Reward';
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
  type: 'FETCH_ALL_PLANTS_REQUESTED';
} | {
  type: 'FETCH_LEVELS_REQUESTED';
} | {
  type: 'FETCH_LEVELS_SUCCESS';
  levels: Array<Level>;
} | {
  type: 'FETCH_LEVELS_FAILED';
} | {
  type: 'FETCH_ALL_PLANTS_FAILED';
  error: Error;
} | {
  type: 'FETCH_ALL_PLANTS_SUCCESS';
  plants: Array<Plant>;
} | {
  type: 'LOGIN_SUCCESS';
  currentUser: User;
} | {
  type: 'SUGGESTION_SUBMISSION_REQUESTED';
  emailMessage: EmailMessage;
} | {
  type: 'SUGGESTION_SUBMISSION_SUCCEED';
} | {
  type: 'SUGGESTION_SUBMISSION_FAILED';
  error: Error;
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
  type: 'SHOW_SETTINGS_MENU_ITEM';
} | {
  type: 'ABOUT_RECEIVED';
  about: About;
} | {
  type: 'PRIVACY_POLICY_RECEIVED';
  about: PrivacyPolicy;
} | {
  type: 'COST_ANALYSIS_DETAIL_DATA_RECEIVED';
  analysisDetail: CostDetail;
} | {
  type: 'COST_ANALYSIS';
  costsAnalysis: Array<CostDetail>;
} | {
  type: 'EDIT_PROFILE_SUBMITTED';
  tempProfile: TempProfile;
} | {
  type: 'MARKET_PRICE';
  marketPrice: MarketPrice;
} | {
  type: 'MY_PAGE';
} | {
  type: 'MY_PLANTS';
  plants: Array<Plant>;
} | {
  type: 'MY_PRODUCT';
  products: Array<Product>;
} | {
  type: 'FETCH_PROVINCE_PRICE_REQUESTED';
  province: string | number;
} | {
  type: 'FETCH_COMMODITY_PRICE_REQUESTED';
} | {
  type: 'FETCH_PLANTS_REQUESTED';
  page: number;
} | {
  type: 'DELETE_ANALYSIS';
  analysisID: string;
} | {
  type: 'LIKE_THREAD_REQUESTED';
  threadID: number;
} | {
  type: 'LIKE_THREAD_SUCCESS';
  threadID: number;
  userLikes: Array<UserLike>;
} | {
  type: 'LIKE_THREAD_FAILED';
} | {
  type: 'SELECTED_COMMODITY_CHANGED';
  commodityName: string;
} | {
  type: 'SELECTED_ANALYSIS';
  selectedAnalysis: number;
} | {
  type: 'FETCH_ANALYSIS_SUCCESS';
  analysis: Array<CostDetail>;
} | {
  type: 'FETCH_USER_THREADS_REQUESTED';
  page: number;
} | {
  type: 'FETCH_USER_THREADS_SUCCESS';
  threads: Map<number, Thread>;
  page: number;
} | {
  type: 'FETCH_USER_THREADS_FAILED';
  error: Object;
} | {
  type: 'NEW_COST_ANALYSIS';
  newAnalysis: AnalyticForm;
} | {
  type: 'PLANT_SELECTED';
  plantID: ?number;
} | {
  type: 'FETCH_PLANTS_SUCCESS';
  plants: Array<Plant>;
  page: number;
} | {
  type: 'FETCH_PLANT_DETAIL_SUCCESS';
  plantDetail: PlantDetailWithPhotos;
  plantingInfoDetail: PlantingInformation;
} | {
  type: 'FETCH_ADDRESS';
} | {
  type: 'SUB_ADDRESS_SELECTED';
  subAddress: string;
  value: string | number;
} | {
  type: 'EDIT_PROFILE_CHANGED';
  fieldName: string;
  fieldValue: string;
} | {
  type: 'GENDER_CHANGED';
  gender: string;
} | {
  type: 'ADDRESS_CHANGED';
  fullAddress: string;
} | {
  type: 'PHONE_CHANGED';
  noHp: string;
} | {
  type: 'NAME_CHANGED';
  name: string;
} | {
  type: 'EDIT_PROFILE_CANCELED';
} | {
  type: 'POST_EDIT_PROFILE';
} | {
  type: 'LOGOUT';
} | {
  type: 'LOGOUT_SUCCESS';
} | {
  type: 'CHANGE_AVATAR';
  image: any;
} | {
  type: 'ADD_PHOTO_POST';
  addPhoto: GalleryData;
} | {
  type: 'PICK_PHOTO';
  image: any;
} | {
  type: 'CLEAR_TEMPORARY_PHOTO';
} | {
  type: 'FETCH_NEWS';
  page: number;
} | {
  type: 'NEWS_SELECTED';
  id: number;
} | {
  type: 'FETCH_MORE_NEWS';
  page: number;
} | {
  type: 'NEWS_HIGHLIGHT_SELECTED';
  id: number;
} | {
  type: 'FETCH_MORE_PEST_REQUESTED';
  pageNumber: number;
} | {
  type: 'FETCH_MORE_DISEASE_REQUESTED';
  pageNumber: number;
} | {
  type: 'FETCH_MORE_PEST_SUCCESS';
  pests: Array<PestDisease | PestDiseaseDetail | PestDiseaseDetailWithCountermeasure>;
} | {
  type: 'FETCH_MORE_DISEASE_SUCCESS';
  diseases: Array<PestDisease | PestDiseaseDetail | PestDiseaseDetailWithCountermeasure>;
} | {
  type: 'FETCH_PEST_DISEASE_REQUESTED';
} | {
  type: 'FETCH_NEWS_REQUESTED';
} | {
  type: 'FETCH_PEST_DISEASE_SUCCESS';
  pests: Array<PestDisease | PestDiseaseDetail | PestDiseaseDetailWithCountermeasure>;
  diseases: Array<PestDisease | PestDiseaseDetail | PestDiseaseDetailWithCountermeasure>;
  commodities: Array<PestDiseaseCommodity>;
} | {
  type: 'FETCH_FILTERED_PEST_REQUESTED';
  pageNumber: number;
} | {
  type: 'FETCH_FILTERED_DISEASE_REQUESTED';
  pageNumber: number;
} | {
  type: 'DISEASE_COMMODITY_SELECTED';
} | {
  type: 'PEST_COMMODITY_SELECTED';
} | {
  type: 'FETCH_PEST_DETAIL_REQUESTED';
  id: number;
} | {
  type: 'FETCH_DISEASE_DETAIL_REQUESTED';
  id: number;
} | {
  type: 'FETCH_PRODUCTS_PEST_REQUESTED';
  pestID: number | string;
} | {
  type: 'FETCH_PRODUCTS_PEST_SUCCESS';
  products: Array<Product | ProductDetail>;
} | {
  type: 'FETCH_PRODUCTS_DISEASE_REQUESTED';
  diseaseID: number;
} | {
  type: 'FETCH_PRODUCTS_DISEASE_SUCCESS';
  products: Array<Product | ProductDetail>;
} | {
  type: 'FETCH_SEARCHED_PEST_REQUESTED';
  query: string;
} | {
  type: 'FETCH_SEARCHED_PEST_SUCCESS';
  pests: Array<PestDisease | PestDiseaseDetail | PestDiseaseDetailWithCountermeasure>;
} | {
  type: 'FETCH_SEARCHED_DISEASE_REQUESTED';
  query: string;
} | {
  type: 'FETCH_SEARCHED_DISEASE_SUCCESS';
  diseases: Array<PestDisease | PestDiseaseDetail | PestDiseaseDetailWithCountermeasure>;
} | {
  type: 'REGISTER_USER';
  registration: Registration;
} | {
  type: 'GUEST_LOGIN';
} | {
  type: 'FETCH_PRODUCTS_PLANT_REQUESTED';
  plantID: number;
} | {
  type: 'UPDATE_PASSWORD';
} | {
  type: 'UPDATE_PASSWORD_POST';
  passwordData: UpdatePassword;
} | {
  type: 'ADD_PHOTO';
} | {
  type: 'FORGOT_PASSWORD';
} | {
  type: 'FORGOT_PASSWORD_POST';
  email: string;
} | {
  type: 'FACEBOOK_LOGIN';
} | {
  type: 'FACEBOOK_LOGIN_ERROR';
} | {
  type: 'FACEBOOK_LOGIN_CANCEL';
} | {
  type: 'THREAD_SELECTED';
  threadID: number;
} | {
  type: 'FETCH_THREAD_DETAIL_REQUESTED';
  threadID: number;
} | {
  type: 'FETCH_THREAD_DETAIL_SUCCESS';
  thread: Thread;
} | {
  type: 'FETCH_THREAD_DETAIL_FAILED';
} | {
  type: 'FETCH_COMMENTS_REQUESTED';
  threadID: number;
  page: number;
} | {
  type: 'FETCH_COMMENTS_SUCCESS';
  threadID: number;
  comments: Map<number, Comment>;
} | {
  type: 'FETCH_COMMENTS_FAILED';
  error: Object;
} | {
  type: 'POST_COMMENT_REQUESTED';
  threadID: number;
  post: string;
} | {
  type: 'FETCH_PESTICIDE_SUCCESSFUL';
  payload: ProductPayload;
} | {
  type: 'FETCH_FERTILIZER_SUCCESSFUL';
  payload: ProductPayload;
} | {
  type: 'FETCH_SEED_SUCCESSFUL';
  payload: ProductPayload;
} | {
  type: 'POST_COMMENT_SUCCESS';
  threadID: number;
  comments: Map<number, Comment>;
} | {
  type: 'POST_COMMENT_FAILED';
  error: Object;
} | {
  type: 'LIKE_COMMENT_REQUESTED';
  commentID: number;
} | {
  type: 'LIKE_COMMENT_SUCCESS';
  threadID: number;
  commentID: number;
  userLikes: Array<UserLike>;
} | {
  type: 'LIKE_COMMENT_FAILED';
  error: Object;
} | {
  type: 'FETCH_PLANT_TYPES_REQUESTED';
} | {
  type: 'FETCH_PLANT_CATEGORIES_REQUESTED';
  plantType: Option;
} | {
  type: 'FETCH_PLANT_VARIETIES_REQUESTED';
  plantType: Option;
  plantCategory: Option;
} | {
  type: 'FETCH_PLANTING_METHODS_REQUESTED';
  plantType: Option;
  plantCategory: Option;
} | {
  type: 'FETCH_PLANTING_RECOMMENDATION_REQUESTED';
  plantType: Option;
  plantCategory: Option;
  plantVariant: Option;
  fieldAltitude: Option;
} | {
  type: 'FETCH_GPS_ADDRESS_REQUESTED';
  coordinates: Coordinates;
} | {
  type: 'FETCH_PLANT_TYPES_SUCCESS';
  plantTypes: Array<Option>;
} | {
  type: 'FETCH_PLANT_CATEGORIES_SUCCESS';
  plantCategories: Array<Option>;
} | {
  type: 'FETCH_PLANT_VARIETIES_SUCCESS';
  plantVarieties: Array<Option>;
} | {
  type: 'FETCH_PLANTING_METHODS_SUCCESS';
  plantingMethods: Array<Option>;
} | {
  type: 'FETCH_GPS_ADDRESS_SUCCESS';
  gpsAddress: GPSAddress;
} | {
  type: 'SHOW_NEW_ITEM_MODAL';
} | {
  type: 'HIDE_NEW_ITEM_MODAL';
} | {
  type: 'INIT_FAVORITES_FAILED';
  error: Error;
} | {
  type: 'ADD_FAVORITE_REQUESTED';
  favorite: Favorite;
} | {
  type: 'ADD_FAVORITE_SUCCESS';
  favorites: Array<Favorite>;
} | {
  type: 'DELETE_FAVORITE_REQUESTED';
  favoriteID: string;
} | {
  type: 'DELETE_FAVORITE_SUCCESS';
  favorites: Array<Favorite>;
} | {
  type: 'FETCH_PRODUCT_DETAIL_REQUESTED';
  productID: number;
} | {
  type: 'FETCH_PRODUCT_REVIEW_REQUESTED';
  page: number;
} | {
  type: 'FETCH_PLANT_FOR_PRODUCT_REQUESTED';
  productID: number;
} | {
  type: 'POST_REVIEW_REQUESTED';
  review: {rate: number; review: string};
} | {
  type: 'POST_USE_PRODUCT_REQUESTED';
  plantData: {productID: number; plantList: Array<any>};
} | {
  type: 'FETCH_THREAD_CATEGORIES_REQUESTED';
} | {
  type: 'FETCH_THREAD_CATEGORIES_SUCCESS';
  categories: Map<number, ThreadCategory>;
} | {
  type: 'FETCH_THREAD_CATEGORIES_FAILED';
  error: Object;
} | {
  type: 'FETCH_THREAD_SUB_CATEGORIES_REQUESTED';
  categoryID: number;
} | {
  type: 'FETCH_THREAD_SUB_CATEGORIES_SUCCESS';
  subCategories: Map<number, ThreadSubCategory>;
} | {
  type: 'FETCH_THREAD_SUB_CATEGORIES_FAILED';
  error: Object;
} | {
  type: 'CREATE_THREAD_REQUESTED';
  categoryID: number;
  subCategoryID: number;
  title: string;
  description: string;
  photo: ?ImageData;
} | {
  type: 'DELETE_THREAD_REQUESTED';
  threadID: number;
  forum: 'user' | 'other';
} | {
  type: 'DELETE_THREAD_SUCCESS';
} | {
  type: 'DELETE_THREAD_FAILED';
} | {
  type: 'EDIT_THREAD_REQUESTED';
  threadID: number;
  categoryID: number;
  subCategoryID: number;
  title: string;
  description: string;
  photo: ?ImageData;
} | {
  type: 'EDIT_THREAD_SUCCESS';
} | {
  type: 'EDIT_THREAD_FAILED';
} | {
  type: 'FETCH_PROVINCE_LIST_REQUESTED';
} | {
  type: 'FETCH_CITY_LIST_REQUESTED';
  provinceID: string;
} | {
  type: 'FETCH_SUBDISTRICT_LIST_REQUESTED';
  cityID: string;
} | {
  type: 'FETCH_VILLAGE_LIST_REQUESTED';
  subDistrictID: string;
} | {
  type: 'FETCH_PROVINCE_LIST_SUCCEED';
  provinceList: Array<Option>;
} | {
  type: 'FETCH_CITY_LIST_SUCCEED';
  cityList: Array<Option>;
} | {
  type: 'FETCH_SUBDISTRICT_LIST_SUCCEED';
  subDistrictList: Array<Option>;
} | {
  type: 'FETCH_VILLAGE_LIST_SUCCEED';
  villageList: Array<Option>;
} | {
  type: 'OPEN_DRAWER';
  isDrawerOpen?: boolean;
} | {
  type: 'FETCH_FORUM_CATEGORIES_REQUESTED';
} | {
  type: 'FETCH_FORUM_CATEGORIES_SUCCESS';
  forumCategories: Map<number, Forum>;
} | {
  type: 'FETCH_FORUM_CATEGORIES_FAILED';
} | {
  type: 'FETCH_FILTERED_THREADS_REQUESTED';
  forumCategory: string;
  threadCategory: string;
  sortBy: 'all' | 'latest' | 'popular';
  page: number;
} | {
  type: 'FETCH_FILTERED_THREADS_SUCCESS';
  threads: Map<number, Thread>;
  page: number;
} | {
  type: 'FETCH_FILTERED_THREADS_FAILED';
} | {
  type: 'FETCH_THREAD_CATEGORIES_FILTER_REQUESTED';
  slug: string;
} | {
  type: 'FETCH_THREAD_CATEGORIES_FILTER_SUCCESS';
  threadCategories: Map<number, ThreadCategory>;
} | {
  type: 'FETCH_THREAD_CATEGORIES_FILTER_FAILED';
  error: Object;
} | {
  type: 'FETCH_SEARCHED_THREADS_REQUESTED';
  forumCategory: string;
  query: string;
  page: number;
} | {
  type: 'FETCH_SEARCHED_THREADS_SUCCESS';
  threads: Map<number, Thread>;
  page: number;
} | {
  type: 'FETCH_SEARCHED_THREADS_FAILED';
  error: Object;
} | {
  type: 'SUBMIT_NEW_PLANT_REQUESTED';
  plant: PlantForm;
} | {
  type: 'SUBMIT_NEW_PLANT_FAILED';
  error: Error;
} | {
  type: 'FETCH_OTHER_THREADS_REQUESTED';
  page: number;
  forum: string;
} | {
  type: 'FETCH_OTHER_THREADS_SUCCESS';
  threads: Map<number, Thread>;
  page: number;
} | {
  type: 'FETCH_OTHER_THREADS_FAILED';
  error: Object;
} | {
  type: 'FETCH_PRODUCT_COMMODITY_REQUESTED';
  category: string;
} | {
  type: 'EMPTY_PRODUCT_LIST';
  target: 'normal' | 'filter' | 'search';
} | {
  type: 'FETCH_PRODUCT_LIST_REQUESTED';
  target: 'normal' | 'filter' | 'search';
  page: number;
  category: string;
} | {
  type: 'FETCH_NEARBY_STORE_REQUESTED';
  lat: number;
  lon: number;
  page: number;
} | {
  type: 'FETCH_NEARBY_STORE_SUCCEED';
  nearbyStores: Map<number, Toko>;
} | {
  type: 'FETCH_NEARBY_STORE_FAILED';
  error: Error;
} | {
  type: 'FETCH_USER_GROUP_LIST_REQUESTED';
} | {
  type: 'FETCH_USER_GROUP_LIST_SUCCESS';
  groups: Map<number, Group>;
} | {
  type: 'FETCH_USER_GROUP_LIST_FAILED';
  error: Error;
} | {
  type: 'FETCH_GROUP_LIST_REQUESTED';
} | {
  type: 'FETCH_GROUP_LIST_SUCCESS';
  groups: Map<number, Group>;
} | {
  type: 'FETCH_GROUP_LIST_FAILED';
  error: Error;
} | {
  type: 'FETCH_GROUP_INVITATION_LIST_REQUESTED';
} | {
  type: 'FETCH_GROUP_INVITATION_LIST_SUCCESS';
  groups: Map<number, Group>;
} | {
  type: 'FETCH_GROUP_INVITATION_LIST_FAILED';
  error: Error;
} | {
  type: 'FETCH_SEARCHED_GROUPS_REQUESTED';
  groupCategory: 'joined' | 'not-joined' | 'invite';
  query: string;
} | {
  type: 'FETCH_SEARCHED_GROUPS_SUCCESS';
  groups: Map<number, Group>;
  } | {
  type: 'FETCH_SEARCHED_GROUPS_FAILED';
  error: Error;
} | {
  type: 'JOIN_GROUP_REQUESTED';
  groupID: number;
} | {
  type: 'FETCH_NOTIFICATION_REQUESTED';
  page: number;
} | {
  type: 'FETCH_NOTIFICATION_SUCCEED';
  notifications: Map<number, Notification>;
  page: number;
} | {
  type: 'FETCH_NOTIFICATION_FAILED';
  error: Error;
} | {
  type: 'NEARBY_STORE_SELECTED';
  storeID: number;
} | {
  type: 'FETCH_STORE_PRODUCTS_REQUESTED';
  page: number;
} | {
  type: 'JOIN_GROUP_SUCCESS';
  groupID: number;
} | {
  type: 'JOIN_GROUP_FAILED';
  error: Error;
} | {
  type: 'CONFIRM_GROUP_INVITATION_REQUESTED';
  groupID: number;
} | {
  type: 'CONFIRM_GROUP_INVITATION_SUCCESS';
  groupID: number;
} | {
  type: 'CONFIRM_GROUP_INVITATION_FAILED';
} | {
  type: 'FETCH_STORE_BY_PRODUCT_REQUESTED';
  lat: number;
  lon: number;
} | {
  type: 'SEARCH_PLANT_REQUESTED';
  keyword: string;
} | {
  type: 'SEARCH_PLANT_SUCCEED';
  plants: Array<Plant>;
} | {
  type: 'SEARCH_PLANT_EMPTY';
} | {
  type: 'SEARCH_PLANT_FAILED';
  error: Error;
} | {
  type: 'GROUP_SELECTED';
  groupID: number;
} | {
  type: 'FETCH_GROUP_DETAIL_REQUESTED';
  groupID: number;
} | {
  type: 'FETCH_GROUP_DETAIL_SUCCESS';
  group: Group;
} | {
  type: 'FETCH_GROUP_DETAIL_FAILED';
  error: Error;
} | {
  type: 'FETCH_GROUP_MEMBERS_REQUESTED';
  groupID: number;
  page: number;
} | {
  type: 'FETCH_GROUP_MEMBERS_SUCCESS';
  groupID: number;
  members: Array<GroupMember>;
} | {
  type: 'FETCH_GROUP_MEMBERS_FAILED';
  error: Error;
} | {
  type: 'FETCH_GROUP_THREADS_REQUESTED';
  groupID: number;
  page: number;
} | {
  type: 'FETCH_GROUP_THREADS_SUCCESS';
  groupID: number;
  threads: Array<Thread>;
  page: number;
} | {
  type: 'FETCH_GROUP_THREADS_FAILED';
  error: Error;
} | {
  type: 'SHOW_TUTORIAL_MODAL';
} | {
  type: 'HIDE_TUTORIAL_MODAL';
} | {
  type: 'DELETE_PLANT_REQUESTED';
  plantID: number;
} | {
  type: 'DELETE_PLANT_SUCCESS';
  plantID: number;
} | {
  type: 'DELETE_PLANT_FAILED';
  error: Error;
} | {
  type: 'UPDATING_APP';
} | {
  type: 'UPDATE_FINISHED';
} | {
  type: 'DOWNLOAD_PROGRESS_UPDATED';
  downloadProgress: number;
  totalDownloadSize: number;
} | {
  type: 'SHARE_PLANT_TO_FORUM_REQUESTED';
  shareItem: {
    plantID: number;
    categoryID: number;
    subCategoryID: number;
    title: string;
    description: string;
  };
} | {
  type: 'SHARE_PLANT_TO_FORUM_SUCCEED';
} | {
  type: 'SHARE_PLANT_TO_FORUM_FAILED';
} | {
  type: 'FETCH_CONTACT_DATA_REQUESTED';
} | {
  type: 'FETCH_CONTACT_DATA_SUCCEED';
  contactData: Array<OfficeData>;
} | {
  type: 'FETCH_CONTACT_DATA_FAILED';
} | {
  type: 'FETCH_HOME_HIGHLIGHT_REQUESTED';
} | {
  type: 'FETCH_HOME_HIGHLIGHT_SUCCEED';
  highlights: Array<Highlight>;
} | {
  type: 'FETCH_REWARDS_REQUESTED';
} | {
  type: 'FETCH_LEVELS_FAILED';
} | {
  type: 'FETCH_REWARDS_SUCCESS';
  rewards: Array<Reward>;
} | {
  type: 'FETCH_HOME_HIGHLIGHT_FAILED';
  error: Error;
} | {
  type: 'FETCH_PLANTING_GUIDES_REQUESTED';
} | {
  type: 'FETCH_PLANTING_GUIDES_SUCCEED';
  plantingGuides: Array<PlantingGuide>;
} | {
  type: 'FETCH_PLANTING_GUIDES_FAILED';
  error: Error;
} | {
  type: 'FETCH_PLANTING_GUIDE_DETAIL_REQUESTED';
  plantDetail: string;
} | {
  type: 'FETCH_PLANTING_GUIDE_DETAIL_SUCCEED';
  fetchedPlantingGuideDetail: PlantingGuideDetail;
} | {
  type: 'FETCH_PLANTING_GUIDE_DETAIL_FAILED';
  error: Error;
} | {
  type: 'FETCH_GAMIFICATION_ACTIONS_REQUESTED';
} | {
  type: 'FETCH_GAMIFICATION_ACTIONS_SUCCEED';
  actions: Array<GamificationAction>;
} | {
  type: 'FETCH_GAMIFICATION_ACTIONS_FAILED';
  error: Error;
} | {
  type: 'FETCH_USER_GAMIFICATION_ACTIONS_REQUESTED';
} | {
  type: 'FETCH_USER_GAMIFICATION_ACTIONS_SUCCEED';
  userActions: Array<UserGamificationAction>;
} | {
  type: 'FETCH_USER_GAMIFICATION_ACTIONS_FAILED';
  error: Error;
} | {
  type: 'FETCH_USER_SCORES_REQUESTED';
} | {
  type: 'FETCH_USER_SCORES_SUCCEED';
  userScores: Array<UserScore>;
} | {
  type: 'FETCH_USER_SCORES_FAILED';
  error: Error;
} | {
  type: 'SAVE_ACTIVITIES';
  activities: Array<Activity>;
};
