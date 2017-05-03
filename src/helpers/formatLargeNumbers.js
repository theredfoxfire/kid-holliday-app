// @flow

export default function formatLargeNumbers(value: number) {
  let temp = value.toString();
  let result = temp;
  if (temp.length > 3 && temp.length <= 6) {
    result = temp.slice(0, -3) + ' Rb';
  } else if (value >= 1000000 && value < 10000000) {
    result = temp.slice(0, -6) + addHundreadsValue(temp.slice(1, 4));
  } else if (value >= 10000000 && value < 100000000) {
    result = temp.slice(0, -6) + addHundreadsValue(temp.slice(2, 5));
  } else if (value >= 100000000 && value < 1000000000) {
    result = temp.slice(0, -6) + addHundreadsValue(temp.slice(3, 6));
  }
  return result;
}

function addHundreadsValue(thousands: string) {
  let isHundreads = Number(thousands.slice(0, 1));
  let isTens = Number(thousands.slice(1, 2));
  let isUnit = Number(thousands.slice(2, 3));
  if (isHundreads > 0 && isTens > 0 && isUnit > 0) {
    return ',' + thousands.slice(0, 3) + ' Jt';
  } else if (isHundreads > 0 && isTens > 0) {
    return ',' + thousands.slice(0, 2) + ' Jt';
  } else if (isHundreads === 0 && isTens > 0) {
    return ',' + thousands.slice(0, 2) + ' Jt';
  } else if (isHundreads > 0) {
    return ',' + thousands.slice(0, 1) + ' Jt';
  } else {
    return ' Jt';
  }
}
