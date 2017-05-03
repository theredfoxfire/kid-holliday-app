// @flow
const {describe, it} = global;

import expect from 'expect';
import Locale, {getDeep} from '../Locale';
import mockLanguages from '../fixtures/mockLanguages';

describe('getDeep', () => {
  it('should get simple values', () => {
    let object = {
      hi: 'Hello',
      greetings: {
        welcome: 'Welcome',
      },
    };
    expect(
      getDeep('hi', object)
    ).toBe('Hello');
    expect(
      getDeep('greetings/welcome', object)
    ).toBe('Welcome');
  });
  it('should get return empty string for non-existing path', () => {
    let object = {hello: 'World'};
    expect(
      getDeep('a', object)
    ).toBe('');
    expect(
      getDeep('a/b/c', object)
    ).toBe('');
    expect(
      getDeep('hello/world/yo', object)
    ).toBe('');
  });
});

describe('Locale', () => {
  let locale;

  it('should initialize', () => {
    locale = new Locale(mockLanguages, 'en');
    expect(locale.getLanguage()).toBe('en');
    expect(locale.getMessage('welcome')).toBe('Welcome');
  });

  it('should change languages', () => {
    locale.setLanguage('id');
    expect(locale.getLanguage()).toBe('id');
    expect(locale.getMessage('welcome')).toBe('Selemat Datang');
  });

  it('should not error when a language is not found', () => {
    locale.setLanguage('none');
    expect(locale.getLanguage()).toBe('none');
    expect(locale.getMessage('welcome')).toBe('');
  });

});
