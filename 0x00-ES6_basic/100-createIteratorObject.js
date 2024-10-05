/* eslint-disable */
export default function createIteratorObject(report) {
  const total = report.allEmployees;
  // eslint disabled
  const newArray = [];
  for (const index in total) {
    if (total.hasOwnProperty(index)) {
      const element = total[index];

      if (Array.isArray(element)) {
        for (const value of element) {
          newArray.push(value);
        }
      } else {
        newArray.push(element);
      }
    }
  }
  return newArray;
}
