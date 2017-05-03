// @flow

export default function formatUrlEncoded(input: {[key: string]: any}) {
  let keys = Object.keys(input);
  let result = '';
  let counter = 0;
  for (let key of keys) {
    let pureValue = encodeURIComponent(input[key]);
    let pureKey = encodeURIComponent(key);
    if (counter === keys.length - 1) {
      result += pureKey + '=' + pureValue;
    } else {
      result += pureKey + '=' + pureValue + '&';
      counter++;
    }
  }
  return result;
}
