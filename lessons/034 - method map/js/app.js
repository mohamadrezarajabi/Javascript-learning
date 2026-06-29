/*
 * map() --> goes through ALL items and TRANSFORMS each one
 * always returns a NEW array with the SAME length as original
 * !NOTE: you MUST return something --> otherwise you get undefined for that item
 */

const scores = [12, 34, 56, 21, 90, 43];
const students = [
  { id: 1, name: "amin", age: 24, score: 20 },
  { id: 2, name: "amir", age: 23, score: 19 },
  { id: 3, name: "babak", age: 19, score: 17 },
];

// transform each score --> if above 20, add 10 to it
const mappedScores = scores.map(function (score) {
  if (score > 20) {
    return score + 10; // 34 --> 44 | 90 --> 100
  }
  return score; // 12 stays 12
});
console.log(mappedScores); // [12, 44, 66, 31, 100, 53]

/** add 10 to every student's score */
const newStudents = students.map(function (student) {
  student.score = student.score + 10;
  return student; // !NOTE: must return the student object
});
console.log(newStudents);

/*
 * filter() vs map():
 * filter() --> REMOVES items that don't pass --> array gets SHORTER
 * map()    --> TRANSFORMS every item         --> array stays SAME LENGTH(undefined)
 */
