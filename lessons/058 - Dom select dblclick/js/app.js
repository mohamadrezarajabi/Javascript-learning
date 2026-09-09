/*
 * select event --> fires when the user highlights/selects text
 * inside an <input> or <textarea>
 */

const input = document.querySelector(".text-input");
const textarea = document.querySelector(".text-area");
const button = document.querySelector(".dbl-btn");
const resultsElem = document.querySelector("#results");

// helper --> writes each result as a new <li> on the page instead of console.log
function show(label, value) {
  const li = document.createElement("li");
  li.innerHTML = `${label}: <span>${value}</span>`;
  resultsElem.append(li);
}

input.addEventListener("select", function (event) {
  show("input select --> target", event.target.tagName);
  show("input select --> cancelable", event.cancelable); // true --> CAN call preventDefault()
});

textarea.addEventListener("select", function (event) {
  show("textarea select --> cancelable", event.cancelable); // true
  event.preventDefault(); // if cancelable is true, this WOULD block the selection visually in some cases
});

//* DblClick (works on ANY element) --> fires only on a double click
button.addEventListener("dblclick", function (event) {
  show("button dblclick", "fired!");
});

input.addEventListener("dblclick", function (event) {
  show("input dblclick", "fired!");
});

/*
 !NOTE: event.cancelable --> tells you whether event.preventDefault() is even ALLOWED
 * to have an effect on this specific event. if cancelable is false, calling
 * preventDefault() silently does NOTHING --> always safe to check first
 * for "select", cancelable is true, but browser support for actually blocking it varies
 */