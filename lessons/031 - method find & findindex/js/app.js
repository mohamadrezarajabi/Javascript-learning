/*
 * find()      --> returns the ACTUAL ITEM that matches the condition
 * findIndex() --> returns the INDEX of the item that matches
 * some()      --> just returns true/false --> doesn't give you the item
 *
 * !NOTE: all three stop at the FIRST match and don't continue
 */

const scores = [12, 34, 56, 21, 90, 43];
const students = [
    { id: 1, name: "amin",  age: 24, score: 20 },
    { id: 2, name: "amir",  age: 23, score: 19 },
    { id: 3, name: "babak", age: 19, score: 17 },
];

// find() --> gives back the item itself
const foundScore = scores.find(function(score) {
    return score === 34;
});
console.log(foundScore); // 34  <-- the actual value

/** find() on array of objects */
const mainStudent = students.find(function(student) {
    return student.name === "amir" && student.score > 15;
});
console.log(mainStudent); // { id: 2, name: "amir", age: 23, score: 19 }

// findIndex() --> gives back the position, not the item
const mainStudentIndex = students.findIndex(function(student) {
    return student.name === "amir" && student.score > 15;
});
console.log(mainStudentIndex);          // 1  <-- position in array
console.log(students[mainStudentIndex]); // { id: 2, name: "amir"... } <-- use index to get item

/*
 * difference between find, findIndex and some:
 * some()       --> "does it exist?"          --> true / false
 * find()       --> "give me the item"        --> the actual object or value
 * findIndex()  --> "where is it?"            --> the index number
 */