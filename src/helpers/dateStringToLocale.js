// @flow

export default function dateStringToLocale(dateString: string | Date): string {
  let options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('id', options);
}
