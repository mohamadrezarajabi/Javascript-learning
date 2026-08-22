/*
 * IIFE --> Immediately Invoked Function Expression
 * a function that runs itself right away, only ONCE
 */

// anonymous version (no name) wrapped in () then called immediately
[1, 2, 3, 4, 5, 6].forEach(function (number) {
  console.log(number);
});

/*
 * named IIFE --> (function name(){})()
 * wrapping in () turns it into an EXPRESSION, then ()) calls it instantly
 */
(function sum(num1, num2) {
  console.log(num1 + num2); // 20
})(12, 8);

/*
 * Difference from a normal function:
 * normal function --> defined once, called LATER, as many times as you want
 * IIFE            --> defined AND called at the same moment, runs only ONCE
 * IIFE also keeps its variables private (scoped inside itself, no global pollution)
 */