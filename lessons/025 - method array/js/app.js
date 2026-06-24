// Array Methods --> push, pop, shift, unshift

let users = ["Amin", "Amir", "Mmd", "Nima", "Reza", "Babak"];

// pop() --> removes last item and RETURNS it
users.pop();   // removes "Babak"
users.pop();   // removes "Reza"
const lastUser = users.pop(); // removes "Nima" and saves it
console.log(lastUser); // "Nima"

// push() --> adds item to the END
users.push("MohammadReza"); // ["Amin", "Amir", "Mmd", "MohammadReza"]

// unshift() --> adds item to the BEGINNING
users.unshift("Qadir"); // ["Qadir", "Amin", "Amir", "Mmd", "MohammadReza"]

// shift() --> removes first item and RETURNS it
users.shift(); // removes "Qadir"
users.shift(); // removes "Amin"

// !NOTE: pop and shift RETURN the removed item --> you can save it in a variable
//        push and unshift RETURN the new length of the array