/* eslint-disable */
export default class Airport {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (typeof name !== 'string') {
            throw new Error('name must be a string');
        }
        return this._name = name;
    }

    get code() {
        return this._code;
    }

    set code(code) {
        if (typeof code !== 'string') {
            throw new Error('code must be a string');
        }
        return this._code = code;
    }

    // [Symbol.for('nodejs.util.inspect.custom')]() {
    //   return `${this.constructor.name} [${this._code}]
    //   { _name: '${this._name}', _code: '${this._code}' }`;
    // }

    get [Symbol.toStringTag]() {
        return `${this._code}`;
    }

    toString() {
        // return `${Airport} ${this._code}`;
        return Object.prototype.toString.call(this).replace('Object', this._code);
        // return `[object ${this._code}]`;
    }
}
