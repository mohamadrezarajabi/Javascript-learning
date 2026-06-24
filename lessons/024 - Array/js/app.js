// Array --> a list of values stored in one variable
// each item has an index, starting from 0

let users = ["Amin", "Amir", "Mmd", "Nima", "Reza", "Babak"];
let scores = [12, 19, 95, 19, 28, 89];

console.log(users[9]);      // undefined  <-- index doesn't exist
console.log(scores.length); // 6          <-- how many items

// update an item --> just reassign it by index
users[2] = "Mohammad";      // "Mmd" --> "Mohammad"

// store an item in a variable
let mmd = users[2];         // mmd = "Mohammad"

// !NOTE: arrays are const-safe --> you can change items but not the whole array
users[6] = "Alireza";       // adds a new item at index 6
users[8] = "ali";       // index 7 becomes undefined and index 8 takes a value 
console.log(users);         // ["Amin", "Amir", "Mohammad", "Nima", "Reza", "Babak", "Alireza","undefined","ali"]