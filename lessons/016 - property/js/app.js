// property: A value that belongs to an object. (noun)  --> no ()
// method:   A function that belongs to an object. (verb) --> needs ()

let name = "Mohamad Reza";

// --- PROPERTIES --- (just store information)
console.log(name.length);       // 12  <-- how many characters

// !NOTE: no () because we are READING a value, not doing an action.

// --- METHODS --- (perform an action)
console.log(name.toUpperCase());  // "MOHAMAD REZA"
console.log(name.toLowerCase());  // "mohamad reza"

// !NOTE: () because we are DOING something, not just reading.

// Simple rule:
// name.length       --> property  (no action, just a value)
// name.toUpperCase() --> method   (does something, needs ())