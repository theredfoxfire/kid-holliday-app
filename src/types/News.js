// @flow

export type NewsState = {
  selectedNewsID: number;
  selectedHighlight: number;
  allNews: Map<number, NewsItem>;
};

export type NewsItem = {
  id: number;
  title: string;
  desc: string;
  foto: ImageSourceURI;
  url: string;
  urlImageRss: ImageSourceURI;
  author: string;
  userID: number;
  highlight: boolean;
  createdAt: string;
  updatedAt: string;
  writer: string;
  excerpt: string;
  slug: string;
  forInstructor: boolean;
  province?: string;
  city?: string;
};

export type News = NewsItem & {
  qarsaNews: boolean;
  adsStatus: string;
  ads?: string;
};
