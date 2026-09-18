/*
 * scroll event --> fires continuously while the user scrolls the page
 * (or a scrollable container) up/down/left/right
 */

const scrollTopElem = document.querySelector("#scrollTop");
const scrollLeftElem = document.querySelector("#scrollLeft");

function scrollHandler() {
  // documentElement --> the <html> tag itself, holds the page's scroll position
  scrollTopElem.textContent = document.documentElement.scrollTop;   // vertical scroll (px)
  scrollLeftElem.textContent = document.documentElement.scrollLeft; // horizontal scroll (px)
}

document.addEventListener("scroll", scrollHandler);

/*
 * !NOTE: scroll fires A LOT (many times per second) while scrolling
 * for expensive operations inside the handler, use "debounce" or "throttle"
 * to limit how often the function actually runs (performance optimization)
 */