//@flow

export type Seller = {
  id: number;
  userID: number;
  name: string;
  address: string;
  province: ?string;
  city: ?string;
  noTlp: string;
  productID: string;
  createdAt: string;
  updatedAt: string;
  longitude: string;
  latitude: string;
  photoStore: string;
  alias: string;
  subdistrict: ?string;
  village: ?string;
  owner: string;
  avatar: ?string;
  avatarFb: ?string;
  email: string;
  ownerAddress: string;
  premium: boolean;
  provinceName: string;
  cityName: string;
};
