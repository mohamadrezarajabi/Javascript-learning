const text = "I LOVE JavaScript and react";

// charAt(index) --> returns the character at that position
console.log(text[4]); // "V"  <-- 5rd character (starts from 0)
console.log(text.charAt(2));  // "L"  <-- 3rd character (starts from 0)

// charCodeAt(index) --> returns the ASCII code of the character
console.log(text.charCodeAt(2));    // 76   <-- ASCII code of "L"

// concat() --> joins strings together (like + but cleaner)
let finalText = text.concat(" And React", " And Vue", " And Node.js");
console.log(finalText); // "I LOVE JavaScript and react And React And Vue And Node.js"

// trim() --> removes spaces from BOTH sides
let messy = "   hello world   ";
console.log(messy.trim());          // "hello world"

// trimStart() --> removes spaces only from LEFT side
console.log(messy.trimStart());     // "hello world   "

// trimEnd() --> removes spaces only from RIGHT side
console.log(messy.trimEnd());       // "   hello world"

// toUpperCase() --> converts all letters to UPPERCASE
console.log(text.toUpperCase());    // "I LOVE JAVASCRIPT AND REACT"

// toLowerCase() --> converts all letters to lowercase
console.log(text.toLowerCase());    // "i love javascript and react"

// includes() --> checks if a word exists inside the string --> true/false
console.log(text.includes("JavaScript"));  // true
console.log(text.includes("node"));        // false  <-- case sensitive

// search() --> finds position of a word, returns index or -1
console.log(text.search("JavaScript"));    // 7   <-- starts at index 7
console.log(text.search("node"));          // -1  <-- not found

// indexOf() --> same as search() but only works with strings, not regex
console.log(text.indexOf("JavaScript"));   // 7
console.log(text.indexOf("node"));         // -1

// !NOTE: search() vs indexOf() --> nearly the same for simple strings.
// search() is more powerful because it also accepts regex patterns.