// @flow

export type Favorite = {
  id: string;
  description: string;
  routeKey: string;
  routeData: Object;
};

export type FavoriteState = {
  loading: boolean;
  favorites: Array<Favorite>;
  selectedFavoriteId: string;
};
