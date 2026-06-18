# 🌐 DOM Manipulation in JavaScript

> A practical, beginner-friendly guide to selecting, modifying, and interacting with HTML elements using the DOM API.

---

## 📌 Table of Contents

- [What is the DOM?](#what-is-the-dom)
- [Selecting Elements](#selecting-elements)
- [Reading & Changing Content](#reading--changing-content)
- [Changing Styles](#changing-styles)
- [Working with Classes](#working-with-classes)
- [Attributes](#attributes)
- [Creating & Inserting Elements](#creating--inserting-elements)
- [Removing Elements](#removing-elements)
- [Traversing the DOM](#traversing-the-dom)
- [Event Handling](#event-handling)
- [Common Patterns](#common-patterns)
- [Common Mistakes](#common-mistakes)
- [Best Practices](#best-practices)

---

## What is the DOM?

The **DOM (Document Object Model)** is JavaScript's way of interacting with HTML. When a browser loads a page, it creates a tree of objects from the HTML — this is the DOM.

```
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        ├── p
        └── div
            ├── button
            └── input
```

JavaScript can **read, change, add, or remove** any element in this tree.

---

## Selecting Elements

### `getElementById` — select by ID (returns one element)

```js
// HTML: <h1 id="title">Hello World</h1>
const title = document.getElementById("title");
console.log(title); // <h1 id="title">Hello World</h1>
```

### `querySelector` — select by CSS selector (returns first match)

```js
// By ID
const title = document.querySelector("#title");

// By class
const card = document.querySelector(".card");

// By tag
const paragraph = document.querySelector("p");

// Complex selectors
const btn = document.querySelector(".container .btn-primary");
const input = document.querySelector("form input[type='email']");
```

### `querySelectorAll` — select all matching (returns NodeList)

```js
// All paragraphs
const allParagraphs = document.querySelectorAll("p");

// All elements with class "card"
const cards = document.querySelectorAll(".card");

// Loop through results
cards.forEach(card => {
  card.style.backgroundColor = "lightblue";
});
```

### Other Selectors

```js
// By class name (returns HTMLCollection)
const items = document.getElementsByClassName("item");

// By tag name
const buttons = document.getElementsByTagName("button");
```

### Quick Comparison

| Method | Returns | Use Case |
|--------|---------|----------|
| `getElementById` | Single element | When you have a unique ID |
| `querySelector` | First match | Most flexible — use CSS syntax |
| `querySelectorAll` | NodeList (all) | When you need multiple elements |

---

## Reading & Changing Content

### `textContent` — plain text (safe)

```js
// HTML: <h1 id="title">Hello</h1>
const title = document.querySelector("#title");

// Read
console.log(title.textContent); // "Hello"

// Write
title.textContent = "Welcome, Reza!";
```

### `innerHTML` — HTML content (powerful but careful)

```js
const container = document.querySelector(".container");

// Read
console.log(container.innerHTML); // returns HTML string

// Write — renders as actual HTML
container.innerHTML = "<strong>Bold text</strong>";

// Append HTML
container.innerHTML += "<p>New paragraph</p>";
```

> ⚠️ Never use `innerHTML` with user input — it can cause **XSS attacks**.

### `innerText` — visible text only

```js
// Unlike textContent, innerText respects CSS (hidden elements excluded)
const el = document.querySelector("p");
console.log(el.innerText);
```

### Input Values

```js
// HTML: <input id="username" type="text" value="Reza">
const input = document.querySelector("#username");

// Read value
console.log(input.value); // "Reza"

// Set value
input.value = "Ali";
```

---

## Changing Styles

### Inline styles via `.style`

```js
const box = document.querySelector(".box");

box.style.backgroundColor = "red";
box.style.color = "white";
box.style.fontSize = "20px";      // always use strings with units
box.style.marginTop = "16px";
box.style.display = "none";       // hide element
box.style.display = "block";      // show element
```

> ⚠️ CSS properties with hyphens become camelCase in JavaScript:
> `background-color` → `backgroundColor`
> `font-size` → `fontSize`
> `border-radius` → `borderRadius`

### Reading computed styles

```js
const el = document.querySelector(".box");
const styles = window.getComputedStyle(el);
console.log(styles.backgroundColor); // actual rendered color
```

---

## Working with Classes

The preferred way to change styles is through **CSS classes**, not inline styles.

### `classList` methods

```js
const btn = document.querySelector(".btn");

// Add a class
btn.classList.add("active");
btn.classList.add("highlight", "large"); // multiple at once

// Remove a class
btn.classList.remove("active");

// Toggle — adds if absent, removes if present
btn.classList.toggle("dark-mode");

// Check if class exists
if (btn.classList.contains("active")) {
  console.log("Button is active");
}

// Replace a class
btn.classList.replace("old-class", "new-class");
```

### Example: Dark mode toggle

```js
const toggleBtn = document.querySelector("#toggle-theme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
```

---

## Attributes

```js
const img = document.querySelector("img");

// Get attribute
console.log(img.getAttribute("src")); // "/images/photo.jpg"
console.log(img.getAttribute("alt")); // "Profile photo"

// Set attribute
img.setAttribute("src", "/images/new-photo.jpg");
img.setAttribute("alt", "New photo");

// Remove attribute
img.removeAttribute("disabled");

// Check if attribute exists
console.log(img.hasAttribute("src")); // true

// data-* attributes
// HTML: <div data-user-id="42" data-role="admin">
const el = document.querySelector("div");
console.log(el.dataset.userId); // "42"
console.log(el.dataset.role);   // "admin"
el.dataset.status = "active";   // sets data-status="active"
```

---

## Creating & Inserting Elements

### `createElement` + `append`

```js
// 1. Create element
const newParagraph = document.createElement("p");

// 2. Add content
newParagraph.textContent = "This is a new paragraph.";

// 3. Add classes/attributes
newParagraph.classList.add("note");
newParagraph.setAttribute("id", "note-1");

// 4. Insert into the DOM
const container = document.querySelector(".container");
container.append(newParagraph);   // adds at end
container.prepend(newParagraph);  // adds at beginning
```

### Inserting relative to an element

```js
const referenceEl = document.querySelector(".reference");

// Insert before
referenceEl.before(newElement);

// Insert after
referenceEl.after(newElement);
```

### `innerHTML` for quick creation (simple cases only)

```js
const list = document.querySelector("ul");

// Add items from an array
const fruits = ["apple", "banana", "cherry"];
list.innerHTML = fruits.map(fruit => `<li>${fruit}</li>`).join("");
```

---

## Removing Elements

```js
const card = document.querySelector(".card");

// Remove the element itself
card.remove();

// Remove a child element
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
parent.removeChild(child);

// Clear all children
const container = document.querySelector(".container");
container.innerHTML = "";
// or
while (container.firstChild) {
  container.removeChild(container.firstChild);
}
```

---

## Traversing the DOM

```js
const item = document.querySelector(".item");

// Parent
console.log(item.parentElement);

// Children
console.log(item.children);          // HTMLCollection of child elements
console.log(item.firstElementChild); // first child element
console.log(item.lastElementChild);  // last child element

// Siblings
console.log(item.nextElementSibling);     // next sibling element
console.log(item.previousElementSibling); // previous sibling element
```

---

## Event Handling

### `addEventListener` — the right way

```js
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", function() {
  console.log("Button clicked!");
});

// With arrow function
btn.addEventListener("click", () => {
  console.log("Clicked!");
});
```

### Common Events

```js
// Mouse events
btn.addEventListener("click", handler);
btn.addEventListener("dblclick", handler);
btn.addEventListener("mouseenter", handler);
btn.addEventListener("mouseleave", handler);

// Keyboard events
document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
  if (e.key === "Enter") { ... }
  if (e.key === "Escape") { ... }
});

// Form events
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page from reloading
  console.log("Form submitted");
});

input.addEventListener("input", (e) => {
  console.log("Current value:", e.target.value);
});

input.addEventListener("change", handler); // fires when field loses focus
input.addEventListener("focus", handler);  // when element is focused
input.addEventListener("blur", handler);   // when element loses focus
```

### The Event Object

```js
btn.addEventListener("click", (event) => {
  console.log(event.type);        // "click"
  console.log(event.target);      // the element that was clicked
  console.log(event.target.id);   // its ID
  console.log(event.clientX);     // mouse X position
  console.log(event.clientY);     // mouse Y position
  
  event.preventDefault();  // prevent default behavior (form submit, link follow)
  event.stopPropagation(); // stop event from bubbling to parent elements
});
```

### Event Delegation — attach one listener to a parent

```js
// Instead of adding listeners to each <li>
const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }
});
```

---

## Common Patterns

### Show / Hide element

```js
const modal = document.querySelector(".modal");
const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");

openBtn.addEventListener("click", () => {
  modal.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("visible");
});
```

### Counter

```js
let count = 0;
const display = document.querySelector("#count");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");

incrementBtn.addEventListener("click", () => {
  count++;
  display.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  count--;
  display.textContent = count;
});
```

### Dynamic list

```js
const input = document.querySelector("#new-item");
const addBtn = document.querySelector("#add");
const list = document.querySelector("#list");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;
  list.append(li);
  input.value = "";
});
```

---

## Common Mistakes

```js
// ❌ Selecting before DOM is loaded
const btn = document.querySelector("#btn"); // might be null!

// ✅ Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn");
});
// Or place <script> just before </body>

// ❌ Using innerHTML with user input — XSS risk!
el.innerHTML = userInput; // dangerous!

// ✅ Use textContent for user input
el.textContent = userInput; // safe

// ❌ Forgetting to check if element exists
const el = document.querySelector(".missing");
el.style.color = "red"; // ❌ TypeError: Cannot read properties of null

// ✅ Always check
const el = document.querySelector(".missing");
if (el) {
  el.style.color = "red";
}

// ❌ Inline styles for everything
el.style.color = "red";
el.style.fontSize = "20px";
el.style.fontWeight = "bold";

// ✅ Use CSS classes instead
el.classList.add("error-text");
```

---

## Best Practices

| Rule | Why |
|------|-----|
| Use `querySelector` / `querySelectorAll` | Most flexible and modern |
| Prefer `classList` over `style` | Separation of concerns |
| Use `textContent` for user data | Prevents XSS |
| Use event delegation for lists | Better performance |
| Cache DOM selections in variables | Avoids repeated lookups |
| Check for `null` before using elements | Prevents crashes |

```js
// ✅ Cache the selection
const btn = document.querySelector("#submit");
btn.addEventListener("click", handleSubmit);
btn.setAttribute("disabled", "");

// ❌ Don't query the same element multiple times
document.querySelector("#submit").addEventListener("click", handleSubmit);
document.querySelector("#submit").setAttribute("disabled", "");
```

---

## 🔗 Related Topics

- [Variables](../variables/README.md)
- [Functions](../functions/README.md)
- [Arrays](../arrays/README.md)

---

*Part of [Javascript-learning](https://github.com/mohamadrezarajabi/Javascript-learning) — by Mohamad Reza*