/* eslint-disable */
export default function cleanSet(set, startString) {
    if (startString === '') {
        return '';
    }
    const newString = [...set].filter((str) => str.startsWith(startString)).map((str) => str.slice(startString.length));
    // console.log(`${newString} newString`);
    return newString.join('-');
}
