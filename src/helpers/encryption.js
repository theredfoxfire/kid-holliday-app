// @flow
import CryptoJS from 'crypto-js';

let secret = 'karsaisthebest';

export function encrypt(text: string) {
  const chipertext = CryptoJS.AES.encrypt(text, secret);
  return chipertext.toString();
}

export function decrypt(text: string) {
  let bytes = CryptoJS.AES.decrypt(text.toString(), secret);
  let plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext;
}
