/* eslint-disable */
export default function cleanSet(set, startString) {
    const newString = [...set].filter((str) => str.substring(0, 3) === startString).map((str) => str.slice(3));
    // console.log(`${newString} newString`);
    return newString.join('-');
}
