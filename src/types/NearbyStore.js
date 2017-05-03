// @flow
import type {Location, Coordinates} from './Location';

export type NearbyStoreState = {
  nearbyStores: Map<number, Toko>;
};

export type Toko = {
  id: number;
  userID: number;
  storeProfilePicture: string;
  storeProfileBackground: string;
  name: string;
  address: string;
  location: Location;
  phone: string;
  email: string;
  ownerName: string;
  createdAt: Date;
  updatedAt: Date;
  coordinate: Coordinates;
  distance: number;
};
