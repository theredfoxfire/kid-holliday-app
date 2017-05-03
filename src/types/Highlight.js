// @flow

export type Highlight = {
  threadID: number;
  newsID: number;
  type: 'news' | 'thread';
  title: string;
  writter: string;
  by: string;
  date: string;
};
