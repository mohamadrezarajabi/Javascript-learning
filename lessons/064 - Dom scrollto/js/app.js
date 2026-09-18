/*
 * scrollTo(x, y) --> manually scrolls the page to an EXACT position
 * documentElement --> the <html> tag, holds the actual scroll position of the page
*/

const button = document.querySelector(".scroll-btn");

function scrollHandler() {
  document.documentElement.scrollTo(0, 30); // jumps instantly to x=0, y=30px
}

button.addEventListener("click", scrollHandler);

/*
  !NOTE: scrollTo(x, y) jumps INSTANTLY by default (no animation)
 * for a smooth animated scroll, pass an object instead:
 * document.documentElement.scrollTo({ top: 30, left: 0, behavior: "smooth" })
 */