/* eslint-disable */
export default function createInt8TypedArray(length, position, value) {
    const dv = new DataView(new ArrayBuffer(length));

    if (position >= 0 <= length) {
        dv.setInt8(position, value);
        return dv;
    }
    throw new Error('Position outside range');

    // throw new Error('Position outside range')
}
