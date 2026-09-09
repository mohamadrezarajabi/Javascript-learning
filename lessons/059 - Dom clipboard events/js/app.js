/*
 * Clipboard Events --> copy, cut, paste
 * fire when the user uses Ctrl+C / Ctrl+X / Ctrl+V (or right-click menu) on an element
 */

const textarea = document.querySelector(".text-area");
const resultsElem = document.querySelector("#results");

// helper --> writes each result as a new <li> on the page instead of console.log
function show(label, value) {
  const li = document.createElement("li");
  li.innerHTML = `${label}: <span>${value}</span>`;
  resultsElem.append(li);
}

function copyHandler(event) {
  show("copy event fired", "Copied");
}

function cutHandler(event) {
  event.preventDefault(); // blocks the cut --> text stays, nothing removed/copied
  show("cut event fired", "blocked by preventDefault");
}

function pasteHandler(event) {
  event.preventDefault(); // blocks pasting --> clipboard content won't be inserted
  show("paste event fired", "blocked by preventDefault");
}

textarea.addEventListener("copy", copyHandler);
textarea.addEventListener("cut", cutHandler);
textarea.addEventListener("paste", pasteHandler);

/*
 * !NOTE: these events are all cancelable, so preventDefault() actually works here
 * real-world use case: disabling copy/paste on sensitive fields (exam sites, code editors)
 * event.clipboardData (in copy/cut/paste) can even access the actual clipboard text/data
 */