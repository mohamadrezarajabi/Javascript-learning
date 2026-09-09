/*
 * contextmenu event --> fires on RIGHT-CLICK, default behavior is showing the browser's own menu
 * preventDefault() blocks that default menu so we can show our OWN custom one instead
 */

const wrapElem = document.querySelector(".wrap");
const customMenu = document.querySelector("#customMenu");
const status = document.querySelector("#status");

wrapElem.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // stops the browser's default right-click menu

  // position our custom menu exactly where the mouse right-clicked
  customMenu.style.left = `${event.pageX}px`;
  customMenu.style.top = `${event.pageY}px`;
  customMenu.style.display = "block"; // show it

  status.textContent = `Right-clicked at (${event.pageX}, ${event.pageY})`;
});

document.body.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // stops the browser's default right-click menu
});

// hide the custom menu when clicking ANYWHERE else on the page
document.addEventListener("click", function () {
  customMenu.style.display = "none";
});

// give each menu item its own action
document.querySelector("#menuCopy").addEventListener("click", function () {
  status.textContent = "Copy clicked ✓";
});

document.querySelector("#menuDelete").addEventListener("click", function () {
  status.textContent = "Delete clicked ✓";
});

document.querySelector("#menuInfo").addEventListener("click", function () {
  status.textContent = "Info clicked ✓";
});

/*
 * !NOTE: without preventDefault(), the browser's native right-click menu
 * would pop up ON TOP of (or instead of) our custom one --> that's why it's essential here
 * this exact pattern is how sites build custom right-click menus (image galleries, editors, etc)
 */