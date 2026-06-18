# 📦 Variables in JavaScript

> A beginner-friendly, comprehensive guide to declaring, using, and understanding variables in JavaScript.

---

## 📌 Table of Contents

- [What is a Variable?](#what-is-a-variable)
- [Declaration Keywords](#declaration-keywords)
- [Data Types](#data-types)
- [Type Coercion & typeof](#type-coercion--typeof)
- [Naming Rules & Conventions](#naming-rules--conventions)
- [Scope](#scope)
- [Common Mistakes](#common-mistakes)
- [Best Practices](#best-practices)

---

## What is a Variable?

A variable is a **named container** that stores a value in memory. Think of it as a labeled box — you can put something inside, check what's there, or replace it.

```js
let name = "Mohamad Reza";
console.log(name); // "Mohamad Reza"
```

---

## Declaration Keywords

JavaScript has three ways to declare a variable:

### `var` — Old way (avoid in modern JS)

```js
var age = 18;
var age = 25; // ✅ Can re-declare (dangerous)
age = 30;     // ✅ Can re-assign
```

> ⚠️ `var` is function-scoped and gets **hoisted** — this causes unpredictable bugs. Avoid it.

---

### `let` — Modern, re-assignable

```js
let score = 0;
score = 100; // ✅ Can re-assign
// let score = 50; // ❌ Cannot re-declare in same scope
```

Use `let` when the value **will change** over time.

---

### `const` — Constant, cannot be re-assigned

```js
const PI = 3.14;
// PI = 3.15; // ❌ TypeError: Assignment to constant variable
```

Use `const` when the value **should not change**.

> ⚠️ `const` with **objects and arrays** is a bit different — the variable itself can't be re-assigned, but the contents **can** be changed:

```js
const user = { name: "Reza" };
user.name = "Ali"; // ✅ This works — we're modifying the object, not re-assigning the variable
```

---

### Quick Comparison

| Feature         | `var`  | `let`  | `const` |
|----------------|--------|--------|---------|
| Re-declare      | ✅     | ❌     | ❌      |
| Re-assign       | ✅     | ✅     | ❌      |
| Block scoped    | ❌     | ✅     | ✅      |
| Hoisted         | ✅     | ⚠️ TDZ | ⚠️ TDZ  |

> TDZ = Temporal Dead Zone — you can't use `let`/`const` before declaring them.

---

## Data Types

JavaScript has **8 data types**. The first 7 are **primitives** (stored by value):

### Primitive Types

```js
// 1. String
let firstName = "Mohamad";
let lastName = 'Reza';
let fullName = `${firstName} ${lastName}`; // Template literal

// 2. Number
let age = 18;
let price = 9.99;
let negative = -5;

// 3. Boolean
let isLoggedIn = true;
let hasError = false;

// 4. Undefined — declared but not assigned
let result;
console.log(result); // undefined

// 5. Null — intentionally empty
let selectedUser = null;

// 6. BigInt — very large numbers
let bigNumber = 9007199254740991n;

// 7. Symbol — unique identifier (advanced)
let id = Symbol("id");
```

### Reference Type

```js
// 8. Object (includes arrays, functions, objects)
let person = { name: "Reza", age: 18 };
let colors = ["red", "green", "blue"];
```

---

## Type Coercion & typeof

### `typeof` — check a variable's type

```js
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" ← known JS bug
console.log(typeof []);          // "object"
console.log(typeof {});          // "object"
console.log(typeof function(){}); // "function"
```

### Implicit Type Coercion

JavaScript automatically converts types in certain situations:

```js
console.log("5" + 3);    // "53"  ← number becomes string (concatenation)
console.log("5" - 3);    // 2     ← string becomes number
console.log(true + 1);   // 2     ← true becomes 1
console.log(false + 1);  // 1     ← false becomes 0
console.log("" == false); // true ← loose equality coerces types
```

> ⚠️ Always use `===` (strict equality) instead of `==` to avoid unexpected coercion.

---

## Naming Rules & Conventions

### Rules (enforced by JavaScript)

```js
let myName = "ok";      // ✅ camelCase — standard
let _private = "ok";    // ✅ starts with underscore
let $price = "ok";      // ✅ starts with dollar sign
// let 1name = "bad";   // ❌ cannot start with a number
// let my-name = "bad"; // ❌ no hyphens
// let let = "bad";     // ❌ reserved keyword
```

### Conventions (style choices)

```js
// Variables and functions → camelCase
let userName = "Reza";
let totalPrice = 100;

// Constants → UPPER_SNAKE_CASE
const MAX_RETRIES = 3;
const API_URL = "https://api.example.com";

// Classes → PascalCase
class UserProfile {}

// Booleans → start with is/has/can
let isActive = true;
let hasPermission = false;
let canEdit = true;
```

---

## Scope

Scope determines **where** a variable is accessible.

### Global Scope

```js
let globalVar = "I'm everywhere";

function greet() {
  console.log(globalVar); // ✅ accessible inside functions
}
```

### Block Scope (`let` and `const`)

```js
{
  let blockVar = "only inside this block";
  const blockConst = "same here";
  console.log(blockVar); // ✅
}
// console.log(blockVar); // ❌ ReferenceError
```

### Function Scope (`var`)

```js
function example() {
  var funcVar = "only inside this function";
  console.log(funcVar); // ✅
}
// console.log(funcVar); // ❌ ReferenceError
```

### Hoisting

```js
// var is hoisted (moved to top) — initialized as undefined
console.log(x); // undefined (no error)
var x = 5;

// let/const are hoisted but NOT initialized — Temporal Dead Zone
// console.log(y); // ❌ ReferenceError
let y = 10;
```

---

## Common Mistakes

```js
// ❌ Using var — leads to bugs
var count = 0;
// ✅ Use let instead
let count = 0;

// ❌ Not initializing when needed
let total;
console.log(total + 10); // NaN

// ❌ Loose equality
if (0 == false) { } // true — unexpected!
// ✅ Strict equality
if (0 === false) { } // false — correct

// ❌ Re-declaring with const
const name = "Reza";
// name = "Ali"; // ❌ TypeError

// ❌ Naming that's too vague
let x = 25;
// ✅ Be descriptive
let userAge = 25;
```

---

## Best Practices

| Rule | Why |
|------|-----|
| Prefer `const` by default | Prevents accidental re-assignment |
| Use `let` only when value changes | Makes intent clear |
| Never use `var` | Block scoping avoids bugs |
| Use meaningful names | Code reads like English |
| Declare one variable per line | Easier to read and debug |
| Always use `===` for comparison | Avoids type coercion surprises |

```js
// ✅ Good
const MAX_SCORE = 100;
let currentScore = 0;
let playerName = "Reza";

// ❌ Bad
var x = 100, y = 0, z = "Reza";
```

---

## 🔗 Related Topics

- [Functions](../functions/README.md)
- [Arrays](../arrays/README.md)
- [DOM](../dom/README.md)

---

*Part of [Javascript-learning](https://github.com/mohamadrezarajabi/Javascript-learning) — by Mohamad Reza*