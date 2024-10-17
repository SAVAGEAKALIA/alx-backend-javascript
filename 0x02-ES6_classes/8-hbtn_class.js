/* eslint-disable */
export default class HolbertonClass {
    constructor(size, location) {
        if (typeof size !== 'number') {
            throw new Error('Size must be a number');
        }
        this.size = size;
        if (typeof location !== 'string') {
            throw new Error('Location must be a string');
        }
        this.location = location;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return `${this.location}`;
        }
        return this.size;
    }
}
