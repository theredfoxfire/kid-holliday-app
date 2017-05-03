// @flow

export type User = {
  id: number;
  email: string;
  name: string;
  role: string;
  gender: string;
  address: string;
  avatar: string;
  avatarFb: string;
  province: number;
  provinceName: string;
  city: number;
  cityName: string;
  noHp: string;
  playerID: string;
  token: string;
  // Gamification
  coins: number;
  experience: number;
  level: number;
};

export type CapturedImage = {
  data: string;
  fileName: string;
  fileSize: number;
  height: number;
  isVertical: boolean;
  originalRotation: number;
  path: string;
  type: string;
  uri: string;
  width: number;
};

export type Profile = {
  name: string;
  token: string;
  email: string;
  gender: string;
  province: string;
  city: string;
  address: string;
  no_hp: string;
  institution_name: string;
  institution_address: string;
  institution_phone: string;
  npwp: string;
  email_producer: string;
  website: string;
  siup: string;
  no_telp: string;
  id_card: string;
  tempImage: CapturedImage;
};

export type TempProfile = {
  name: string;
  gender: string;
  avatar: string;
  tempImage: CapturedImage;
  avatarFacebook: string;
  noHp: string;
  provinceName: string;
  province: number;
  allProvincesData: Array<{label: string; value: string}>;
  cityName: string;
  city: number;
  allCitiesData: Array<{label: string; value: string}>;
  fullAddress: string; //in server this will be address
};

export type UpdatePassword = {
  password_lama: string;
  password_baru: string;
};

export type PasswordReset = {
  email: string;
  token: string;
  createdAt: string;
  updatedAt: string;
};

export type UserLike = {
  id: number;
  userID: number;
  threadID: number;
  commentID?: number;
  status?: boolean;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  role: string;
  avatar: ?ImageSource;
  avatarFacebook: ?ImageSource;
  premium: boolean;
};
