/*
 * Objects In Array --> an array can store multiple objects
 * each object contains related data as key: value pairs
 */

let users = [
    { id: 1, name: "amin" },
    { id: 2, name: "amir" },
    { id: 3, name: "babak" },
];

// console.log(users[2].name); // access object property inside array
// console.log(users[2]["name"]); // access object property inside array

/** push() --> adds a new element to the end of an array */

let newUser = {
    id: users.length + 1, // generate next available id
    name: "Mohammad",
};

users.push(newUser);

let newUser2 = {
    id: users.length + 1,
    name: "Qadir",
};

users.push(newUser2);

console.log(users); // display updated array