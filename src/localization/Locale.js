// @flow
type Listener = () => void;
type Language = {[key: string]: string | Language};
export type Languages = {[languageCode: string]: Language};

const EMPTY = {};

export default class Locale {
  _selectedLanguage: string;
  _languages: Languages;
  _listeners: Set<Listener>;

  constructor(languages: Languages, selectedLanguage: string) {
    this._languages = languages;
    this._selectedLanguage = selectedLanguage;
    this._listeners = new Set();
  }

  subscribe(listener: Listener) {
    this._listeners.add(listener);
    let unsubscribe = () => {
      this._listeners.delete(listener);
    };
    return {unsubscribe};
  }

  setLanguage(language: string) {
    this._selectedLanguage = language;
    for (let listener of this._listeners) {
      listener();
    }
  }

  getLanguage() {
    return this._selectedLanguage;
  }

  getMessage(name: string): string {
    let languageCode = this.getLanguage();
    let languagePack = this._languages[languageCode] || EMPTY;
    return getDeep(name, languagePack);
  }

}

export function getDeep(path: string, object: Language) {
  let parts = path.split('/');
  let i = 0;
  let result = object;
  while (result != null && i < parts.length) {
    let name = parts[i++];
    result = (typeof result === 'object') ? result[name] : null;
  }
  return (typeof result === 'string') ? result : '';
}
