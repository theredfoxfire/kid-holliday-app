//@flow
import monthList from '../constants/monthList';

export default function datePrettify(dateString: string) {
  if (/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(dateString)) {
    let [datePart] = dateString.split(' ');
    let [year, month, date] = datePart.split('-');
    date = date[0] === '0' ? date.substring(1) : date;
    month = monthList[month];
    return `${date} ${month} ${year}`;
  }
  return dateString;
}
