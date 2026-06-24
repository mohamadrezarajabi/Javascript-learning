/*
 * forEach --> runs a function for each item in an array
 * it takes a callback function as a parameter
 * !NOTE: forEach does NOT return anything --> just loops
 */

const users = ["amin", "amir", "qadir", "sasan", "ali"];

// simple array
users.forEach(function(user) {
    console.log(user); // prints each name one by one
});

const scores = [12, 34, 56, 21, 90, 43];

// number array
scores.forEach(function(score) {
    console.log(score); // prints each score one by one
});

const students = [
    { id: 1, name: "amin",  age: 24, score: 20 },
    { id: 2, name: "amir",  age: 23, score: 19 },
    { id: 3, name: "babak", age: 19, score: 17 },
];

/** array of objects --> access each property with dot notation */
students.forEach(function(student) {
    console.log(student.name); // "amin" "amir" "babak"
});
