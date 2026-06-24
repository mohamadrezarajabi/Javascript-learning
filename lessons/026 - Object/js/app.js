/*
 * Object --> a collection of related data stored as key: value pairs
 * unlike arrays that use indexes, objects use KEYS to access values
 */

let user = {
    id: 1,
    name: "MohamadReza-Rajabi",
    phone: 9912345678,
    city: "THR",
    email: "mohamad@gmail.com",
    isAdmin: true,
};

console.log(typeof user);   // "object"
console.log(user);          // shows the whole object

// two ways to access a value:
console.log(user["email"]); // Bracket Notation --> useful when key is dynamic
console.log(user.phone);    // Dot Notation     --> cleaner and more common

let userEmail = user.email; // store a property in a variable
console.log(userEmail);     // "mohamad@gmail.com"

// accessing a key that doesn't exist --> returns undefined (no error)
console.log(user.password);     // undefined
console.log(user["password"]);  // undefined

user.password = "adell1212"; // add a new property OR update existing one

/** delete --> completely removes a property from the object */
delete user.email;

console.log(user.email); // undefined  <-- it's gone
console.log(user);       // email no longer exists in the object