/*
 * DOM Element Properties --> read/write info & content of an element
 */

const liElem = document.querySelector(".list-item");
const inputElem = document.querySelector("input");
const itemElems = document.querySelectorAll(".list-item");

console.log(liElem.className);   // "list-item"
console.log(liElem.id);          // "firstItem"
console.log(inputElem.value);    // "Hello" --> only inputs have .value

liElem.innerHTML = "New Content"; // sets HTML content (parses tags too)
console.log(liElem.innerHTML);    // "New Content"

console.log(liElem.textContent);  // like innerHTML but ignores HTML tags
console.log(liElem.tagName);      // "LI" --> element's tag name (uppercase)
console.log(liElem.parentElement);// the <ul> that wraps this <li>

liElem.style.color = "blue";      // sets inline CSS directly

liElem.test = "testValue";        // you CAN add custom JS properties
console.log(liElem.test);         // "testValue" --> but not a real HTML attribute

itemElems.forEach(function (element) {
  console.log(element);
});

/*
 * NOTE!
 * innerHTML re-parses the string as HTML (slower, XSS risk with user input)
 * textContent is safer & faster when you just need plain text
 */