/* eslint-disable */
export default class ClassRoom {
    constructor(maxStudentsSize) {
        // check type
        if (!isNaN(maxStudentsSize)) {
            this._maxStudentsSize = maxStudentsSize;
        }
    }
}
