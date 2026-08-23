/*
 * Falsy --> values that act like "false" in a boolean context
 * Truthy --> everything else (acts like "true")
 */

// the ONLY falsy values in JS:
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false --> empty string
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// everything else is truthy:
console.log(Boolean("0"));       // true --> non-empty string
console.log(Boolean([]));        // true --> empty array is truthy!
console.log(Boolean({}));        // true --> empty object is truthy!
console.log(Boolean(" "));       // true --> space is a character

/*
 * used a lot in if() checks:
 */
let username = "";
if (username.trim()) {
  console.log("has a name");
} else {
  console.log("empty --> falsy"); // this runs
}

/*
  !NOTE
 * [] and {} are truthy even though they LOOK empty --> a classic mistake
 * always check .length or Object.keys(obj).length instead of relying on Boolean()
 */