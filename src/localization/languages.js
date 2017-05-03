// @flow
import en from './languages/en';
import id from './languages/id';

const languagePacks = {
  en,
  id,
};

export const languageCodes = Object.keys(languagePacks);
export default languagePacks;
