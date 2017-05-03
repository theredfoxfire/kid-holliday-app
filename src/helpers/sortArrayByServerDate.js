// @flow

export function parseServerDate(dateString: string): number {
  return Date.parse(dateString.replace('-', '/'));
}

type Options = {
  sort?: 'ascending' | 'descending';
  key: string;
};

export default function sortArrayByServerDate(array: Array<Object>, options: Options): Array<Object> {
  if (array.length === 0) {
    return array;
  }
  if (!array[0].hasOwnProperty(options.key)) {
    throw new Error(`Object property '${options.key}' not found.`);
  }
  if (!/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(array[0][options.key])) {
    throw new Error(`Object property '${options.key}' is not a date string.`);
  }
  let sortFunction = (a, b) => options.sort && options.sort === 'descending'
    ? parseServerDate(b[options.key]) - parseServerDate(a[options.key])
    : parseServerDate(a[options.key]) - parseServerDate(b[options.key]);
  return array.sort(sortFunction);
}
