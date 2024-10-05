export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const item in reportWithIterator) {
    if (item < reportWithIterator.length - 1) {
      str += `${reportWithIterator[item]} | `;
    } else {
      str += reportWithIterator[item];
    }
  }
  return str;
}
