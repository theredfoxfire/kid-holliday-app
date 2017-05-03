// @flow
const {describe, it} = global;
import expect from 'expect';
import onCodePushSyncStatusChange from '../onCodePushSyncStatusChange';
import CodePushSyncStatus from '../../constants/CodePushSyncStatus';

describe('onCodePushSyncStatusChange', () => {
  it('dispatch the right action according to SyncStatus', () => {
    let store = {
      dispatch: expect.createSpy(),
    };

    onCodePushSyncStatusChange(CodePushSyncStatus.CHECKING_FOR_UPDATE, store);
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith({type: 'UPDATE_FINISHED'});

    onCodePushSyncStatusChange(CodePushSyncStatus.UPDATE_IGNORED, store);
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith({type: 'UPDATE_FINISHED'});

    onCodePushSyncStatusChange(CodePushSyncStatus.INSTALLING, store);
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith({type: 'UPDATING_APP'});
  });
});
