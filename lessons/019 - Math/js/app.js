// Math --> a built-in object in JS that has mathematical properties and methods

let number = 4;

// pow(base, exponent) --> same as ** operator
console.log(number ** 3);           // 64  <-- 4 to the power of 3
console.log(Math.pow(number, 3));   // 64  <-- 4 to the power of 3

// sqrt() --> square root of a number
console.log(Math.sqrt(100));        // √100 = 10

// abs() --> always returns positive number
console.log(Math.abs(-12));         // |-12| = 12  <-- removes the minus sign

// min() / max() --> finds smallest or largest number from a list
console.log(Math.min(12, 19, 9, 14, 21, 8));  // 8
console.log(Math.max(12, 19, 9, 14, 21, 8));  // 21

// floor() --> rounds DOWN always  19.9 --> 19
// ceil()  --> rounds UP always    12.1 --> 13
// round() --> normal rounding     8.7  --> 9  | 8.3 --> 8
// trunc() --> just removes the decimal part  12.8 --> 12

// random() --> gives a random number between 0 and 1  ex: 0.4823...
// !NOTE: multiply by 1000 to get a bigger range, then floor() to remove decimals
console.log(Math.floor(Math.random() * 1000)); // random number between 0 and 999