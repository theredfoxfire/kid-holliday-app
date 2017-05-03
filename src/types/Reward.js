// @flow

export type MyReward = {
  id: number;
  thumbnail: string;
  name: string;
  distributorName: string;
  code: string;
  image: string;
  isClaimed: boolean;
};

export type Reward = {
  id: number;
  thumbnail?: ImageSource;
  name: string;
  price: number;
  coin: number;
};
