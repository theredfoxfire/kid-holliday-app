// @flow

import fetchJSON from '../helpers/fetchJSON';

import {GAMIFY_API} from '../constants/defaultServerAPIUrl';

import type {UserScore} from '../types/Gamification';

export default {
  async fetchLevelsInfo() {
    let response = await fetchJSON('/levels', {}, GAMIFY_API);
    if (!response || !response.data || response.data.length === 0) {
      throw new Error('Gagal mendapatkan informasi level');
    } else {
      return response.data;
    }
  },
  async fetchRewards() {
    let newRewards = [];
    let response = await fetchJSON('/rewards', {}, GAMIFY_API);
    if (!response || !response.data || response.data.length === 0) {
      throw new Error('Gagal mendapatkan informasi level');
    } else {
      response.data.map((reward) => {
        let newReward = {
          id: reward.id,
          name: reward.name,
          thumbnail: reward.photo1,
          thumbnail2: {uri: reward.photo2},
          coin: reward.reward_points,
          price: reward.price ? reward.price : 0,
        };
        newRewards.push(newReward);
      });
      return newRewards;
    }
  },
  async fetchActions() {
    let response = await fetchJSON('/actions', {}, GAMIFY_API);
    if (!response || !response.data || response.data.length === 0) {
      throw new Error('Gagal mendapatkan informasi kegiatan gamifikasi.');
    } else {
      return response.data;
    }
  },
  async fetchUserActions(token: string) {
    // TODO: used any to bypass fetchJSON returning an Object
    let response = await fetchJSON(`/action-log?token=${token}`, {}, GAMIFY_API);
    if (!response || !response.data || response.data.length === 0) {
      throw new Error('Gagal mendapatkan informasi kegiatan gamifikasi user.');
    } else {
      return response.data;
    }
  },
  async fetchUserScores(token: string) {
    // TODO: used any to bypass fetchJSON returning an Object
    let response: any = await fetchJSON(`/user-score?token=${token}`, {}, GAMIFY_API);
    let userScores: Array<UserScore> = response;
    if (!userScores || userScores.length === 0) {
      throw new Error('Gagal mendapatkan informasi skor gamifikasi user.');
    } else {
      return userScores;
    }
  },
};
