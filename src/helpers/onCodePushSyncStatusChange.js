// @flow

import CodePushSyncStatus from '../constants/CodePushSyncStatus';

import type {Dispatch} from '../types/Store';

type Store = {
  dispatch: Dispatch;
};

export default function onCodePushSyncStatusChange(SyncStatus: number, store: Store) {
  switch (SyncStatus) {
    case CodePushSyncStatus.CHECKING_FOR_UPDATE: {
      store.dispatch({
        type: 'UPDATE_FINISHED',
      });
      break;
    }
    case CodePushSyncStatus.UPDATE_IGNORED: {
      store.dispatch({
        type: 'UPDATE_FINISHED',
      });
      break;
    }
    case CodePushSyncStatus.INSTALLING: {
      store.dispatch({
        type: 'UPDATING_APP',
      });
      break;
    }
    default: break;
  }
}
