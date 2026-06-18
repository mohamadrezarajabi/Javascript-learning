# 📋 Arrays in JavaScript

> A complete beginner-to-intermediate guide to creating, manipulating, and iterating over arrays in JavaScript.

---

## 📌 Table of Contents

- [What is an Array?](#what-is-an-array)
- [Creating Arrays](#creating-arrays)
- [Accessing Elements](#accessing-elements)
- [Modifying Arrays](#modifying-arrays)
- [Array Properties](#array-properties)
- [Essential Methods](#essential-methods)
- [Iteration Methods](#iteration-methods)
- [Searching & Filtering](#searching--filtering)
- [Transforming Arrays](#transforming-arrays)
- [Spread Operator](#spread-operator)
- [Destructuring](#destructuring)
- [Common Mistakes](#common-mistakes)
- [Best Practices](#best-practices)

---

## What is an Array?

An array is an **ordered list** of values stored in a single variable. Each value has a position called an **index**, starting from `0`.

```js
let fruits = ["apple", "banana", "cherry"];
//              [0]       [1]       [2]
```

Arrays can hold any type of data — even mixed types:

```js
let mixed = [42, "hello", true, null, { name: "Reza" }, [1, 2, 3]];
```

---

## Creating Arrays

```js
// Array literal — most common way
let colors = ["red", "green", "blue"];

// Empty array
let emptyList = [];

// Array constructor
let scores = new Array(5); // creates array with 5 empty slots
let nums = new Array(1, 2, 3); // [1, 2, 3]

// Array.from — create from other structures
let letters = Array.from("hello"); // ["h", "e", "l", "l", "o"]
let range = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]
```

---

## Accessing Elements

```js
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "cherry"
console.log(fruits[3]); // undefined — index doesn't exist

// Last element
console.log(fruits[fruits.length - 1]); // "cherry"

// at() method — modern way to access from end
console.log(fruits.at(0));  // "apple"
console.log(fruits.at(-1)); // "cherry" — last element
console.log(fruits.at(-2)); // "banana" — second from last
```

---

## Modifying Arrays

```js
let nums = [1, 2, 3];

// Change an element
nums[0] = 10;
console.log(nums); // [10, 2, 3]

// Add to end
nums.push(4);
console.log(nums); // [10, 2, 3, 4]

// Remove from end
let last = nums.pop();
console.log(last); // 4
console.log(nums); // [10, 2, 3]

// Add to beginning
nums.unshift(0);
console.log(nums); // [0, 10, 2, 3]

// Remove from beginning
let first = nums.shift();
console.log(first); // 0
console.log(nums);  // [10, 2, 3]
```

### splice — add/remove anywhere

```js
let fruits = ["apple", "banana", "cherry", "date"];

// Remove 1 element at index 1
fruits.splice(1, 1);
console.log(fruits); // ["apple", "cherry", "date"]

// Remove and insert
fruits.splice(1, 1, "blueberry", "grape");
console.log(fruits); // ["apple", "blueberry", "grape", "date"]

// Insert without removing (0 elements removed)
fruits.splice(2, 0, "kiwi");
console.log(fruits); // ["apple", "blueberry", "kiwi", "grape", "date"]
```

---

## Array Properties

```js
let arr = [10, 20, 30, 40, 50];

// Length — number of elements
console.log(arr.length); // 5

// Check if it's an array
console.log(Array.isArray(arr));   // true
console.log(Array.isArray("hi")); // false
```

---

## Essential Methods

### `concat` — merge arrays

```js
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c); // [1, 2, 3, 4]
```

### `slice` — copy a portion (non-destructive)

```js
let nums = [1, 2, 3, 4, 5];

let part = nums.slice(1, 3);  // from index 1 up to (not including) 3
console.log(part); // [2, 3]
console.log(nums); // [1, 2, 3, 4, 5] — original unchanged

let fromEnd = nums.slice(-2); // last 2 elements
console.log(fromEnd); // [4, 5]
```

### `join` — convert array to string

```js
let words = ["Hello", "World"];
console.log(words.join(" "));  // "Hello World"
console.log(words.join("-"));  // "Hello-World"
console.log(words.join(""));   // "HelloWorld"
```

### `reverse` — reverse in place

```js
let nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums); // [5, 4, 3, 2, 1]
```

### `sort` — sort in place

```js
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

// ⚠️ sort() without a comparator doesn't work well for numbers!
let nums = [10, 1, 21, 2];
nums.sort(); // ❌ [1, 10, 2, 21] — sorted as strings

// ✅ Use a comparator for numbers
nums.sort((a, b) => a - b); // ascending: [1, 2, 10, 21]
nums.sort((a, b) => b - a); // descending: [21, 10, 2, 1]
```

### `flat` — flatten nested arrays

```js
let nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());    // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2));   // [1, 2, 3, 4, 5, 6]
console.log(nested.flat(Infinity)); // fully flatten any depth
```

---

## Iteration Methods

### `forEach` — run code for each element (no return value)

```js
let scores = [85, 92, 78, 95];

scores.forEach((score, index) => {
  console.log(`Student ${index + 1}: ${score}`);
});
// Student 1: 85
// Student 2: 92
// Student 3: 78
// Student 4: 95
```

### `for...of` — clean loop over values

```js
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

---

## Searching & Filtering

### `indexOf` / `lastIndexOf` — find index of a value

```js
let nums = [10, 20, 30, 20, 10];

console.log(nums.indexOf(20));     // 1 — first occurrence
console.log(nums.lastIndexOf(20)); // 3 — last occurrence
console.log(nums.indexOf(99));     // -1 — not found
```

### `includes` — check if value exists

```js
let fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false
```

### `find` — find first element matching condition

```js
let users = [
  { name: "Ali", age: 25 },
  { name: "Reza", age: 18 },
  { name: "Sara", age: 30 }
];

let youngUser = users.find(user => user.age < 20);
console.log(youngUser); // { name: "Reza", age: 18 }
```

### `findIndex` — find index matching condition

```js
let scores = [70, 85, 92, 60];

let passingIndex = scores.findIndex(score => score >= 90);
console.log(passingIndex); // 2
```

### `filter` — get all matching elements (returns new array)

```js
let nums = [1, 2, 3, 4, 5, 6, 7, 8];

let evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8]

let adults = users.filter(user => user.age >= 18);
```

---

## Transforming Arrays

### `map` — transform each element (returns new array)

```js
let prices = [10, 20, 30, 40];

// Add 10% tax to each price
let withTax = prices.map(price => price * 1.1);
console.log(withTax); // [11, 22, 33, 44]

// Extract names from objects
let users = [{ name: "Reza" }, { name: "Ali" }, { name: "Sara" }];
let names = users.map(user => user.name);
console.log(names); // ["Reza", "Ali", "Sara"]
```

### `reduce` — accumulate a single value

```js
let nums = [1, 2, 3, 4, 5];

let sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

// Find maximum
let max = nums.reduce((acc, cur) => (cur > acc ? cur : acc), nums[0]);
console.log(max); // 5
```

### Chaining Methods

```js
let students = [
  { name: "Reza", grade: 85 },
  { name: "Ali", grade: 55 },
  { name: "Sara", grade: 92 },
  { name: "Mona", grade: 48 }
];

// Get names of students who passed (grade >= 60), sorted alphabetically
let passedNames = students
  .filter(s => s.grade >= 60)
  .map(s => s.name)
  .sort();

console.log(passedNames); // ["Reza", "Sara"]
```

---

## Spread Operator

```js
let a = [1, 2, 3];
let b = [4, 5, 6];

// Merge arrays
let merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Copy an array (prevents mutation)
let copy = [...a];
copy.push(99);
console.log(a);    // [1, 2, 3] — original unchanged
console.log(copy); // [1, 2, 3, 99]

// Pass array as function arguments
function sum(x, y, z) { return x + y + z; }
let nums = [1, 2, 3];
console.log(sum(...nums)); // 6
```

---

## Destructuring

```js
let fruits = ["apple", "banana", "cherry"];

// Extract values into variables
let [first, second, third] = fruits;
console.log(first);  // "apple"
console.log(second); // "banana"

// Skip elements
let [, , last] = fruits;
console.log(last); // "cherry"

// With rest
let [head, ...rest] = fruits;
console.log(head); // "apple"
console.log(rest); // ["banana", "cherry"]

// Default values
let [a = "default", b = "fallback"] = ["real"];
console.log(a); // "real"
console.log(b); // "fallback"
```

---

## Common Mistakes

```js
// ❌ Mutating original array when you don't mean to
let original = [1, 2, 3];
let copy = original; // this is a reference, NOT a copy!
copy.push(4);
console.log(original); // [1, 2, 3, 4] — original changed!

// ✅ Use spread to copy
let copy = [...original];

// ❌ sort() on numbers without comparator
[10, 1, 21].sort(); // [1, 10, 21] — wrong order

// ✅ Use comparator
[10, 1, 21].sort((a, b) => a - b); // [1, 10, 21] — correct

// ❌ Using indexOf to check existence (returns -1 for not found)
if (arr.indexOf("item")) { } // -1 is truthy! Bug!

// ✅ Use includes
if (arr.includes("item")) { }

// ❌ Forgetting map/filter return new arrays
let nums = [1, 2, 3];
nums.map(n => n * 2); // result is thrown away!

// ✅ Store the result
let doubled = nums.map(n => n * 2);
```

---

## Best Practices

| Rule | Why |
|------|-----|
| Use `const` for arrays | The reference won't change |
| Use `[...arr]` to copy | Prevents accidental mutation |
| Prefer `map/filter/reduce` over loops | More readable and declarative |
| Use `includes` over `indexOf` | Clearer intent |
| Name arrays as plurals | `users`, `scores`, `items` |
| Chain methods when it's readable | Avoid if chaining is too long |

---

## 🔗 Related Topics

- [Variables](../variables/README.md)
- [Functions](../functions/README.md)
- [DOM](../dom/README.md)

---

*Part of [Javascript-learning](https://github.com/mohamadrezarajabi/Javascript-learning) — by Mohamad Reza*