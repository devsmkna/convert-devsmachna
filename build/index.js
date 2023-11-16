"use strict";
/*
    CONVERT-DEVSMACHNA
    Author: Davide Visco (davidevisco@email.com)
                                                                                
    Last Modified: Sunday, 12th November 2023, 5:52:18
    Modified by: Davide Visco (davidevisco@email.com)

    PROJECT LINKS:
    NPM:    https://www.npmjs.com/package/convert-devsmachna
    GITHUB: https://github.com/devsmkna/convert-devsmachna

    HOW TO INSTALL:
    > npm i convert-devsmachna

    HOW TO USE (JAVASCRIPT):
    const { converter } = require("./convert-devsmachna/index.js");
    converter.convert(1, converter.Currency.USD, converter.Currency.EUR);


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.Currency = void 0;
var Currency;
(function (Currency) {
    Currency[Currency["USD"] = 0] = "USD";
    Currency[Currency["AUD"] = 1] = "AUD";
    Currency[Currency["CAD"] = 2] = "CAD";
    Currency[Currency["CHF"] = 3] = "CHF";
    Currency[Currency["CNY"] = 4] = "CNY";
    Currency[Currency["EUR"] = 5] = "EUR";
    Currency[Currency["GBP"] = 6] = "GBP";
    Currency[Currency["INR"] = 7] = "INR";
    Currency[Currency["JPY"] = 8] = "JPY";
    Currency[Currency["HKD"] = 9] = "HKD";
    Currency[Currency["SGD"] = 10] = "SGD";
})(Currency || (exports.Currency = Currency = {}));
const currencies = {
    [Currency.USD]: 1,
    [Currency.AUD]: 1.5714,
    [Currency.CAD]: 1.3799,
    [Currency.CHF]: 0.9027,
    [Currency.CNY]: 7.2540,
    [Currency.EUR]: 0.9357,
    [Currency.GBP]: 0.8180,
    [Currency.INR]: 83.3174,
    [Currency.JPY]: 151.5531,
    [Currency.HKD]: 7.8097,
    [Currency.SGD]: 1.3603,
};
/*
    CONVERT
    Convert value from a currency to another.

    @param {number} value - currency value to be converted
    @param {string} startCurrency - currency name of initial value
    @param {string} endCurrency - currency name of converted value
*/
const convert = (value, startCurrency, endCurrency) => value / currencies[startCurrency] * currencies[endCurrency];
exports.convert = convert;
