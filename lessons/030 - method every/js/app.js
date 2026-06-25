/*
 * every() --> checks if ALL items pass a condition
 * returns true only if EVERY single item passes
 * returns false if even ONE item fails
 */

const scores = [12, 34, 56, 21, 90, 43];

const isAll = scores.every(function(score) {
    return score > 10; // are ALL scores greater than 10?
});
console.log("isAll =", isAll); // true  <-- all of them are above 10

// !NOTE: if even one score was less than 10 --> returns false

const students = [
    { id: 1, name: "amin",  age: 24, score: 20 },
    { id: 2, name: "amir",  age: 23, score: 19 },
    { id: 3, name: "babak", age: 19, score: 17 },
];

/** are ALL students older than 18? */
let result = students.every(function(student) {
    return student.age > 18;
});
console.log(result); // true  <-- 24, 23, 19 are all above 18

// arrow function version --> cleaner
const isAllAdults = students.every(student => student.age > 18);