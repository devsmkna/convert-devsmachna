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

    HOW TO USE (TYPESCRIPT):
    import { convert, Currency } from "./index";
    convert(1, Currency.USD, Currency.EUR);
*/

export enum Currency {
    USD,
    AUD,
    CAD,
    CHF,
    CNY,
    EUR,
    GBP,
    INR,
    JPY,
    HKD,
    SGD,
}

const currencies = {
    [Currency.USD]:   1,
    [Currency.AUD]:   1.5714,
    [Currency.CAD]:   1.3799,
    [Currency.CHF]:   0.9027,
    [Currency.CNY]:   7.2540,
    [Currency.EUR]:   0.9357,
    [Currency.GBP]:   0.8180,
    [Currency.INR]:  83.3174,
    [Currency.JPY]: 151.5531,
    [Currency.HKD]:   7.8097,
    [Currency.SGD]:   1.3603,
}

/* 
    CONVERT
    Convert value from a currency to another.

    @param {number} value - currency value to be converted
    @param {string} startCurrency - currency name of initial value
    @param {string} endCurrency - currency name of converted value
*/
export const convert = (value : number, startCurrency : Currency, endCurrency : Currency) => value / currencies[startCurrency] * currencies[endCurrency];