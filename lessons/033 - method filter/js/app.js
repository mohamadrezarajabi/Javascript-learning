/*
 * filter() --> goes through ALL items and keeps only ones that pass the condition
 * returns a NEW array --> original stays unchanged
 * !NOTE: unlike find() that stops at first match --> filter() checks EVERY item
 */

const users   = ["amin", "amir", "qadir", "sasan", "ali"];
const scores  = [12, 34, 56, 21, 90, 43];
const students = [
    { id: 1, name: "amin",  age: 24, score: 20 },
    { id: 2, name: "amir",  age: 23, score: 19 },
    { id: 3, name: "babak", age: 19, score: 17 },
];

// keeps users with name length less than 4
const filteredUsers = users.filter(function(user) {
    return user.length < 4; // "ali" --> true ✅ | "amin" --> false ❌
});
console.log(filteredUsers); // ["ali"]

// keeps scores less than 15
const filteredScores = scores.filter(function(score) {
    return score < 15; // 12 --> true ✅ | 34 --> false ❌
});
console.log(filteredScores); // [12]

/** keeps students with score above 18 */
const filteredStudents = students.filter(function(student) {
    return student.score > 18; // amin:20 ✅ | amir:19 ✅ | babak:17 ❌
});
console.log("filteredStudents →", filteredStudents); // amin and amir only

/*
 * true  --> item stays in the new array
 * false --> item gets skipped
 */