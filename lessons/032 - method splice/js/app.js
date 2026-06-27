/*
 * splice() --> remove, replace, or add items ANYWHERE in the array
 * syntax: array.splice(startIndex, deleteCount, ...itemsToAdd)
 *
 * push/pop/unshift/shift --> only work at START or END of array
 * splice()               --> works ANYWHERE in the array
 */

const users = ["amin", "amir", "qadir", "sasan", "ali"];

// 2 params --> just REMOVE items
// splice(startIndex, howManyToRemove)
users.splice(2, 1); // removes 1 item at index 2 --> removes "qadir"
console.log(users); // ["amin", "amir", "sasan", "ali"]

// 3+ params --> REMOVE and ADD at the same time
// splice(startIndex, howManyToRemove, ...newItems)
users.splice(1, 3, "reza", "amirreza", "ashkan", "Mobin");
// starts at index 1 --> removes 3 items --> adds 4 new items
console.log(users); // ["amin", "reza", "amirreza", "ashkan", "Mobin", "ali"]

// !NOTE: splice MUTATES the original array --> changes it directly

/*
 * when to use what:
 * push()    --> add to END
 * pop()     --> remove from END
 * unshift() --> add to BEGINNING
 * shift()   --> remove from BEGINNING
 * splice()  --> add/remove ANYWHERE in the middle
 */