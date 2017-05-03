// @flow

export default function changeEmptyString(input: Object): Object {
  let output = {...input};
  for (let key of Object.keys(input)) {
    if (input[key] === '') {
      output[key] = null;
    }
    if (typeof input[key] === 'object') {
      output[key] = changeEmptyString(input[key]);
    }
  }
  return output;
}
