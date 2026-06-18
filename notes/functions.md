# ⚙️ Functions in JavaScript

> A beginner-friendly guide to understanding, writing, and using functions in JavaScript — from basic declarations to arrow functions and scope.

---

## 📌 Table of Contents

- [What is a Function?](#what-is-a-function)
- [Function Declaration](#function-declaration)
- [Function Expression](#function-expression)
- [Arrow Functions](#arrow-functions)
- [Parameters & Arguments](#parameters--arguments)
- [Return Values](#return-values)
- [Default Parameters](#default-parameters)
- [Rest Parameters](#rest-parameters)
- [Scope & Closures](#scope--closures)
- [Common Mistakes](#common-mistakes)
- [Best Practices](#best-practices)

---

## What is a Function?

A function is a **reusable block of code** that performs a specific task. Instead of writing the same code multiple times, you define it once and call it whenever needed.

```js
// Define once
function greet() {
  console.log("Hello, Reza!");
}

// Call many times
greet(); // "Hello, Reza!"
greet(); // "Hello, Reza!"
```

---

## Function Declaration

The most common way to define a function. Can be called **before** it's defined (hoisted).

```js
function sayHello() {
  console.log("Hello!");
}

sayHello(); // ✅ Works

// With parameters
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser("Mohamad"); // "Hello, Mohamad!"
```

### Hoisting with Declarations

```js
// ✅ Works — function declarations are fully hoisted
sayHi();

function sayHi() {
  console.log("Hi!");
}
```

---

## Function Expression

A function stored inside a variable. **Not hoisted** — must be defined before calling.

```js
const greet = function() {
  console.log("Hello!");
};

greet(); // ✅

// ❌ This would fail:
// greet(); // ReferenceError if called before the declaration
// const greet = function() { ... };
```

### Named Function Expression

```js
const multiply = function multiplyNumbers(a, b) {
  return a * b;
};

console.log(multiply(3, 4)); // 12
```

---

## Arrow Functions

A shorter, modern syntax for writing functions. Introduced in ES6.

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function — same result
const add = (a, b) => {
  return a + b;
};

// Even shorter — implicit return (one expression)
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
```

### Different Arrow Function Styles

```js
// No parameters
const sayHello = () => console.log("Hello!");

// One parameter — parentheses optional
const double = n => n * 2;
const double = (n) => n * 2; // same

// Multiple parameters — parentheses required
const sum = (a, b) => a + b;

// Multi-line — need curly braces and explicit return
const calculate = (a, b) => {
  const result = a * b;
  return result;
};
```

### Arrow Functions vs Regular Functions

| Feature | Regular Function | Arrow Function |
|---------|-----------------|----------------|
| `this` binding | Own `this` | Inherits from parent |
| Hoisting | ✅ (declaration) | ❌ |
| `arguments` object | ✅ | ❌ |
| As method | ✅ | ⚠️ (careful with `this`) |
| Short syntax | ❌ | ✅ |

---

## Parameters & Arguments

**Parameters** are placeholders defined in the function. **Arguments** are the actual values passed when calling.

```js
// name and age are parameters
function introduce(name, age) {
  console.log(`I'm ${name}, ${age} years old.`);
}

// "Reza" and 18 are arguments
introduce("Reza", 18); // "I'm Reza, 18 years old."
```

### Too Many or Too Few Arguments

```js
function greet(name) {
  console.log("Hello, " + name);
}

greet("Reza", "extra", "ignored"); // "Hello, Reza" — extras ignored
greet(); // "Hello, undefined" — missing becomes undefined
```

---

## Return Values

Functions can **return** a value to the caller using `return`.

```js
function add(a, b) {
  return a + b; // sends value back
}

const result = add(10, 5);
console.log(result); // 15
```

### Without Return

```js
function printSum(a, b) {
  console.log(a + b); // just prints, doesn't return
}

const result = printSum(2, 3); // prints 5
console.log(result); // undefined — nothing was returned
```

### Early Return

```js
function checkAge(age) {
  if (age < 18) {
    return "Too young"; // exits function immediately
  }
  return "Welcome!";
}

console.log(checkAge(15)); // "Too young"
console.log(checkAge(20)); // "Welcome!"
```

---

## Default Parameters

Set a fallback value when an argument is not provided.

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Reza");  // "Hello, Reza!"
greet();        // "Hello, Guest!" — uses default
```

```js
function createProfile(name, role = "User", age = 0) {
  return { name, role, age };
}

createProfile("Reza");             // { name: "Reza", role: "User", age: 0 }
createProfile("Reza", "Admin", 18); // { name: "Reza", role: "Admin", age: 18 }
```

---

## Rest Parameters

Collect **multiple arguments** into an array using `...`.

```js
function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sumAll(1, 2, 3));       // 6
console.log(sumAll(1, 2, 3, 4, 5)); // 15
```

```js
// Combine regular and rest parameters
function introduce(firstName, ...hobbies) {
  console.log(`I'm ${firstName}, I like: ${hobbies.join(", ")}`);
}

introduce("Reza", "coding", "trading", "photography");
// "I'm Reza, I like: coding, trading, photography"
```

---

## Scope & Closures

### Function Scope

Variables declared inside a function are **not accessible outside**.

```js
function calculate() {
  let result = 42; // only exists inside this function
  console.log(result); // ✅
}

calculate();
// console.log(result); // ❌ ReferenceError
```

### Closures

A closure is when a function **remembers** variables from its outer scope even after the outer function has finished.

```js
function makeCounter() {
  let count = 0; // remembered by inner function

  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

---

## Common Mistakes

```js
// ❌ Forgetting to return
function add(a, b) {
  a + b; // just evaluates, doesn't return!
}
console.log(add(2, 3)); // undefined

// ✅ Add return
function add(a, b) {
  return a + b;
}

// ❌ Calling before expression declaration
greet(); // ❌ ReferenceError
const greet = () => console.log("Hi");

// ❌ Confusing parameters with arguments
function multiply(x, y) { // x, y = parameters
  return x * y;
}
multiply(3, 4); // 3, 4 = arguments

// ❌ Too many responsibilities in one function
function doEverything() {
  // fetches data, validates, transforms, saves — bad!
}

// ✅ One function = one job
function fetchData() { ... }
function validateData() { ... }
function saveData() { ... }
```

---

## Best Practices

| Rule | Why |
|------|-----|
| One function = one task | Easier to read, test, and reuse |
| Use descriptive names | `getUserAge()` beats `get()` |
| Keep functions short | If it's too long, split it |
| Prefer `const` for function expressions | Prevents accidental reassignment |
| Use default parameters over `if` checks | Cleaner code |
| Return early to avoid deep nesting | Easier to read |

```js
// ✅ Clean function
const calculateTotal = (price, tax = 0.09) => {
  if (price <= 0) return 0;
  return price + price * tax;
};

// ❌ Messy equivalent
function calculateTotal(price, tax) {
  if (price > 0) {
    if (!tax) {
      tax = 0.09;
    }
    return price + price * tax;
  } else {
    return 0;
  }
}
```

---

## 🔗 Related Topics

- [Variables](../variables/README.md)
- [Arrays](../arrays/README.md)
- [DOM](../dom/README.md)

---

*Part of [Javascript-learning](https://github.com/mohamadrezarajabi/Javascript-learning) — by Mohamad Reza*