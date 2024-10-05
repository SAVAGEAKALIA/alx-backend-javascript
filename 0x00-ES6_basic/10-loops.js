export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let element of array) {
    element = appendString + element;
    newArray.push(element);
  }

  return newArray;
}
