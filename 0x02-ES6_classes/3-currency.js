/* eslint-disable */
export default class Currency {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }

    // Additional methods and properties can be added here

    get code() {
        return this._code;
    }

    set code(code) {
        // console.log(code)
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a string');
        }
        this._code = code;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = name;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
