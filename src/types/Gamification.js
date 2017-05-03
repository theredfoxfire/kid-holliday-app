// @flow
import type {Reward} from '../types/Reward';

import type {Activity} from './Activity';

export type GamificationState = {
  activities: Array<Activity>;
  levels: Array<Level>;
  rewards: Array<Reward>;
  actions: Array<GamificationAction>;
  userActions: Array<UserGamificationAction>;
  userScores: Array<UserScore>;
};

export type Level = {
  id: number;
  name: string; // in server called nama;
  slug: string;
  requirement: number; // in server is called level_points (required for reaching certain levels)
  bonusPoints: number; // in server called bonus_points (received after reaching certain levels)
  coins: number; // in server called exchange_points (AKA coins for reward claim)
};

export type Bonus = {
  name: string;
  coins: number;
};

export type GamificationAction = {
  id: number;
  coin: number;
  page: string;
  detail: string;
  status: string;
  description: string;
  slug: string;
};

export type UserGamificationAction = {
  user: string;
  page: string;
  detail: string;
  givenCoin: string;
  createdAt: string; //"23 Mar 2017"
};

export type UserScore = {
  id: number;
  user: string;
  page: string;
  detail: string;
  oneTime: number;
  fourTimes: number;
  daily: number;
};
