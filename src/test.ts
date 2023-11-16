/*
    CONVERT-DEVSMACHNA                                                          
    Author: Davide Visco (davidevisco@email.com)                                
                                                                                
    Last Modified: Sunday, 12th November 2023, 5:54:47                          
    Modified by: Davide Visco (davidevisco@email.com)                           

*/
import { convert, Currency } from "./index";

console.log("converting 1 USD TO EUR: " + convert(1, Currency.USD, Currency.EUR));