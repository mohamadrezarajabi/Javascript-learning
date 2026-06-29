/*
 * a collection of useful array and string methods
 */

const scores    = [12, 34, 56, 56, 90, 43];
const usernames = "amin-amir/ali";
const text      = "abcde";

// Array.isArray() --> checks if something is an array --> true/false
console.log(Array.isArray(scores));  // true
console.log(Array.isArray(19));      // false

// indexOf() --> finds FIRST position of an item
// lastIndexOf() --> finds LAST position of an item
console.log(scores.indexOf(56));     // 2  <-- first 56
console.log(scores.lastIndexOf(56)); // 3  <-- last 56

/*
 * slice() vs splice():
 * slice()  --> just READS a portion --> original stays unchanged --> returns new array
 * splice() --> REMOVES or ADDS items --> original gets changed   --> mutates array
 */
console.log(scores.slice(2, 4)); // [56, 56]  <-- scores is still the same
console.log(scores);             // [12, 34, 56, 56, 90, 43] <-- unchanged

// join() --> converts array to string with a separator
console.log(scores.join("/"));   // "12/34/56/56/90/43"

// reverse() --> reverses the array IN PLACE --> mutates original
console.log(scores.reverse());   // [43, 90, 56, 56, 34, 12]

/*
 * split() --> string method --> opposite of join()
 * join()  --> array  to string
 * split() --> string to array
 */
console.log(usernames.split("/")); // ["amin-amir", "ali"]

// padStart(totalLength, fillWith) --> adds characters to the BEGINNING
// padEnd(totalLength, fillWith)   --> adds characters to the END
console.log(text.padStart(8, "x")); // "xxxabcde"  <-- fills from left
console.log(text.padEnd(8, "x"));   // "abcdexxx"  <-- fills from right

// fill(value, start, end) --> replaces items in array with a value
scores.fill(51, 2, 4); // replaces index 2 and 3 with 51
console.log(scores);   // [12, 34, 51, 51, 90, 43]