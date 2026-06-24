/*
 * some --> checks if at least one item matches a condition
 * includes --> checks if a specific value exists in an array
 * !NOTE: some returns true/false based on a callback condition
 */

const users = ["amin", "amir", "qadir", "sasan", "ali"];

/** includes --> best for primitive values (string, number, boolean) */
let isInUsers = users.includes("amir");

console.log(isInUsers); // true

const students = [
    { id: 1, name: "amin",  age: 24, score: 20 },
    { id: 2, name: "amir",  age: 23, score: 19 },
    { id: 3, name: "babak", age: 19, score: 17 },
];

/** some --> best for checking object properties */
let isInStudents = students.some(function(student) {
    return student.name === "amir" &&
           student.score > 15;
});

console.log(isInStudents); // true

/*
 * includes vs some
 * includes --> checks for an exact value
 * some     --> checks a custom condition
 */

/*
 * some vs forEach
 * forEach --> runs code on every item
 * some    --> stops when first match is found
 * forEach --> returns undefined
 * some    --> returns true or false
 */