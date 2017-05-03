// @flow

import type {RootState} from './RootState';
import type {Action} from './Action';

type Unsubscribe = () => void;

export type Dispatch = (action: Action) => void;

export type Store = {
  getState: () => RootState;
  dispatch: Dispatch;
  subscribe: (listener: Function) => Unsubscribe;
};
