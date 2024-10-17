/* eslint-disable */
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this.floors = floors;
    }

    get floors() {
        return this._floors;
    }

    set floors(floors) {
        if (typeof floors !== 'number') {
            throw new Error('Floors must be a number');
        }
        return this._floors = floors;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}
