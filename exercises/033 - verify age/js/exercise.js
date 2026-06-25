const students = [
  { id: 1, name: "amin", age: 24, score: 20 },
  { id: 2, name: "amir", age: 23, score: 19 },
  { id: 3, name: "babak", age: 19, score: 17 },
  { id: 4, name: "hassan", age: 17, score: 21 },
  { id: 5, name: "mohamad", age: 21, score: 10 },
  { id: 6, name: "hassan", age: 45, score: 70 },
];

let isInStudents = students.every(function (student) {
  console.log(student);

  return student.age >= 18;
});

console.log(isInStudents);