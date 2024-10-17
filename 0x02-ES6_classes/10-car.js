/* eslint-disable */
export default class Car {
    constructor(brand, motor, color) {
        if (typeof brand !== 'string' && !this._brand) {
            this._brand = Symbol(brand);
            // throw new Error('Brand must be a string');
        }
        this._brand = brand;
        if (typeof motor !== 'string') {
            this._motor = Symbol(motor);
            // throw new Error('Motor must be an string');
        }
        this._motor = motor;
        if (typeof color !== 'string') {
            this._color = Symbol(color);
            // throw new Error('Color must be a string');
        }
        this._color = color;
    }

    cloneCar() {
        const Constructor = Object.getPrototypeOf(this).constructor[Symbol.species] || Object.getPrototypeOf(this).constructor;
        return new Constructor();
    }
}
