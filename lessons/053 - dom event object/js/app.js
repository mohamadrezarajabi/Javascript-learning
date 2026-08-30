/*
 * event object --> every event listener automatically receives an "event" object
 * we write each piece of info straight into the page instead of console.log
 */

const button = document.querySelector(".target-box");
const input = document.querySelector(".text-input");

// grab all 8 coordinate span elements once (avoid re-querying on every click)
const clientXElem = document.querySelector("#clientX");
const clientYElem = document.querySelector("#clientY");
const screenXElem = document.querySelector("#screenX");
const screenYElem = document.querySelector("#screenY");
const pageXElem = document.querySelector("#pageX");
const pageYElem = document.querySelector("#pageY");
const offsetXElem = document.querySelector("#offsetX");
const offsetYElem = document.querySelector("#offsetY");

// input-related elements
const liveValueElem = document.querySelector("#liveValue");
const enterStatusElem = document.querySelector("#enterStatus");

button.addEventListener("click", function (event) {
  clientXElem.textContent = event.clientX; // mouse X in the visible window
  clientYElem.textContent = event.clientY; // mouse Y in the visible window

  screenXElem.textContent = event.screenX; // mouse X on the whole monitor
  screenYElem.textContent = event.screenY; // mouse Y on the whole monitor

  pageXElem.textContent = event.pageX; // mouse X including page scroll
  pageYElem.textContent = event.pageY; // mouse Y including page scroll

  offsetXElem.textContent = event.offsetX; // mouse X relative to the button itself
  offsetYElem.textContent = event.offsetY; // mouse Y relative to the button itself
});

input.addEventListener("keyup", function (event) {
  liveValueElem.textContent = event.target.value; // same as input.value --> live text on page

  // event.code --> modern way, checks the physical key ("Enter")
  if (event.code === "Enter") {
    enterStatusElem.textContent = "Enter pressed ✓";
    enterStatusElem.classList.add("enter-pressed"); // turns green as feedback
  } else {
    enterStatusElem.textContent = "Waiting for Enter...";
    enterStatusElem.className = "status"; // reset back to normal color
  }
});

/*
 !NOTE: event.keyCode (numbers like 13 for Enter) is OLD/deprecated
 * event.code ("Enter", "KeyA", "Space") and event.key ("Enter", "a", " ")
 * are the modern replacements --> code = physical key, key = the actual character
 * client/page coords only differ once the page is scrolled
 */