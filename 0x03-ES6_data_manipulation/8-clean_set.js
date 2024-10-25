/* eslint-disable */
export default function cleanSet(set, startString) {
    if (startString === '') {
        return '';
    }
    const newString = [...set].filter((str) => str.startsWith(startString)).map((str) => str.slice(3));
    // console.log(`${newString} newString`);
    return newString.join('-');
}
