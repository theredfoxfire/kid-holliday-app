// @flow

export type CodePushState = {
  downloadProgress: number;
  totalDownloadSize: number;
  isAppUpdating: boolean;
};

export type DownloadProgress = {
  receivedBytes: number;
  totalBytes: number;
};
