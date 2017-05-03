// @flow
type Option = {
  prefix?: string;
  separator: string;
};
export default function formatNumber(input: string, option: Option) {
  input = input.split('.')[0];
  let {prefix, separator} = option;
  let result: string = '';
  let count = 0;
  if (input.length > 3) {
    for (let i = input.length - 1; i >= 0; i--) {
      result = input[i] + result;
      count += 1;
      if (count % 3 === 0 && count !== 0 && count !== input.length) {
        result = separator + result;
      }
    }
  } else {
    result = input;
  }
  result = prefix ? prefix + ' ' + result : result;
  return result;
}
