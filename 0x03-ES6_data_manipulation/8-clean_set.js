/* eslint-disable */
export default function cleanSet(set, startString) {
    if (startString === '' || !(typeof startString === 'string')) {
        return '';
    }
    const newString = [...set].filter((str) => str.startsWith(startString)).map((str) => str.slice(startString.length));
    // console.log(`${newString} newString`);
    return newString.join('-');
}
