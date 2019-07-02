'use strict'

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let quote2: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let index = quote.indexOf(":")
let index2 = quote2.indexOf("Law.")
let slicedQuote1 = quote.slice(20, 82);
let slicedQuote2 = quote.slice(0, 21);

let fullQuote = slicedQuote2 + "always takes longer than" + slicedQuote1



console.log(fullQuote);