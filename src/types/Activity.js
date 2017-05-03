// @flow

export type SubActivity = {
  id: number;
  name: string;
  isDone: boolean;
  coin: number;
};

export type Activity = {
  id: number;
  type: string; // NOTE: previously 'ONETIME' | 'REPEATABLE';
  name: string;
  subActivities: Array<SubActivity>;
  isDone: boolean;
  coin: number;
};
