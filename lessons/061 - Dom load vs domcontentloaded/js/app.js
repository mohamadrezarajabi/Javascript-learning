/*
 * DOMContentLoaded --> fires as soon as the HTML is fully parsed into the DOM
 * (doesn't wait for images, CSS, or other external resources)
 *
 * load (on window) --> fires only after EVERYTHING is finished:
 * HTML + all images + CSS + fonts + other external files
 */

const timelineElem = document.querySelector("#timeline");

// helper --> writes each event to the page with a timestamp, instead of console.log
function logEvent(label) {
  const li = document.createElement("li");
  const time = new Date().toLocaleTimeString();
  li.innerHTML = `<span>[${time}]</span> ${label}`;
  timelineElem.append(li);
}

document.addEventListener("DOMContentLoaded", function () {
  logEvent("DOMContentLoaded ");
});

// load fires on the WINDOW, not document.body --> waits for the image too
window.addEventListener("load", function () {
  logEvent("window load --> EVERYTHING finished loading");
});

// specifically watching just the image's own load event
const bigImage = document.querySelector("#bigImage");
bigImage.addEventListener("load", function () {
  logEvent("image load");
});

/*
 !NOTE: DOMContentLoaded ALWAYS fires before (or at the same time as) window's load event
 * use DOMContentLoaded when you just need to safely interact with DOM elements
 * use load only if you truly need images/resources to be ready first (e.g. reading image size)
 */