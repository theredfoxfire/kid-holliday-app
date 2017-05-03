//@flow

export type About = {
  id: number;
  title: string;
  description: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
  urlPicture: string;
};

export type PrivacyPolicy = {
  desc: string;
};

export type TermCondition = PrivacyPolicy & {};
