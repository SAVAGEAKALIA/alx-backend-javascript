/* eslint-disable */
export default class Building {
    constructor(sqft) {
        if (typeof sqft !== 'number') {
            throw new Error('sqft must be a number');
        }
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }

    // set sqft(sqft) {
    //     if(isNaN(sqft)){
    //         throw new Error("sqft must be a number");
    //     }
    //     return this._sqft = sqft;
    // }

    evacuationWarningMessage() {
        throw Error('Class extending Building must override evacuationWarningMessage');
    }
}
