/*
 * Screen Object
 *
 * The screen object provides information about the user's display.
 * It is part of the BOM (Browser Object Model).
 *
 * Main properties:
 * - width / height
 * - availWidth / availHeight
 * - colorDepth / pixelDepth
 */

//* Exc 1 -> Select HTML Elements

const screenWidth = document.querySelector("#screen-width");
const screenHeight = document.querySelector("#screen-height");

const availableWidth = document.querySelector("#available-width");
const availableHeight = document.querySelector("#available-height");

const colorDepth = document.querySelector("#color-depth");
const pixelDepth = document.querySelector("#pixel-depth");

const windowWidth = document.querySelector("#window-width");
const windowHeight = document.querySelector("#window-height");

const status = document.querySelector("#status");

//* Exc 2 -> Get Screen Information

function updateScreenInfo() {
  // Get the total screen width.
  screenWidth.textContent = `${screen.width}px`;

  // Get the total screen height.
  screenHeight.textContent = `${screen.height}px`;

  // Get the available screen width.
  availableWidth.textContent = `${screen.availWidth}px`;

  // Get the available screen height.
  availableHeight.textContent = `${screen.availHeight}px`;

  // Get the screen color depth.
  colorDepth.textContent = `${screen.colorDepth} bits`;

  // Get the screen pixel depth.
  pixelDepth.textContent = `${screen.pixelDepth} bits`;

  // Get the browser window width.
  windowWidth.textContent = `${window.innerWidth}px`;

  // Get the browser window height.
  windowHeight.textContent = `${window.innerHeight}px`;

  // Display the update status.
  status.textContent = "Screen information updated.";
}

//* Exc 3 -> Update Information on Window Resize

// Run the function when the page loads.
updateScreenInfo();

// Run the function whenever the browser window is resized.
window.addEventListener("resize", function () {
  updateScreenInfo();
});

/*
 * !NOTE:
 *
 * screen.width / screen.height:
 * Return the total screen dimensions.
 *
 * screen.availWidth / screen.availHeight:
 * Return the available screen dimensions.
 *
 * screen.colorDepth / screen.pixelDepth:
 * Return color and pixel depth in bits.
 *
 * window.innerWidth / window.innerHeight:
 * Return the current browser viewport dimensions.
 *
 * Important:
 * Resizing the browser window usually changes innerWidth
 * and innerHeight, not screen.width or screen.height.
 *
 * In modern browsers, colorDepth and pixelDepth
 * commonly return 24.
 */
