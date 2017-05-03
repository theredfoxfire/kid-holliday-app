// @flow

export default function formatToCamelCase(inputObject: {[key: string]: any}) {
  let snakeKeys = Object.keys(inputObject);
  let newObject = {};

  for (let key of snakeKeys) {
    if (typeof inputObject[key] !== 'object') {
      newObject[parseToCamelCase(key)] = inputObject[key];
    } else if (inputObject[key] !== null && !Array.isArray(inputObject[key])) {
      newObject[parseToCamelCase(key)] = formatToCamelCase(inputObject[key]);
    } else {
      newObject[parseToCamelCase(key)] = inputObject[key];
    }
  }
  return newObject;
}

function parseToCamelCase(input: string) {
  let camelCaseString = '';
  let stringInput = input.split('_');
  if (stringInput.length === 1) {
    return stringInput[0];
  }
  camelCaseString += stringInput[0];
  for (let i = 1; i < stringInput.length; i++) {
    if (stringInput[i] === 'id') {
      camelCaseString += stringInput[i].toUpperCase();
    } else {
      let tempString = stringInput[i][0].toUpperCase();
      tempString += stringInput[i].slice(1);
      camelCaseString += tempString;
    }
  }
  return camelCaseString;
}
