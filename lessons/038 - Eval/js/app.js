/*
 * eval() --> takes a STRING and runs it as real JavaScript code
 */

let calc = prompt("Please Enter:");
console.log(eval(calc));

// "2 * 2"   --> eval runs it --> 4
// "20 ** 3" --> eval runs it --> 8000

/*
 * Eval is evil:
 * runs ANY code in the string, not just math --> security risk (code injection)
 * NEVER use eval() on user input
 */