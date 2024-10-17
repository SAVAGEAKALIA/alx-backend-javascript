/* eslint-disable */
import Currency from './3-currency.js';
// const Currency = require("./3-currency.js");

export default class Pricing {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error('Amount must be Number');
        }
        this._amount = amount;
    }

    get currency() {
        return this._currency;
    }

    set currency(currency) {
        if (typeof currency.displayFullCurrency() !== 'string') {
            throw new Error('Currency must be String');
        }
        this._currency = currency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }

    static convertPrice(amount, conversionRate) {
        if (isNaN(amount) || isNaN(conversionRate)) {
            throw new Error('One of the variables is not a number');
        }
        return amount * conversionRate;
    }
}
