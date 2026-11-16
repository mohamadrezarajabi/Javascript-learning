/*
 * DOM -> Document Object Model
 * BOM -> Browser Object Model
 *
 * clientWidth and clientHeight return the visible dimensions
 * of an element, including padding but excluding borders and margins.
 */

//* Exc 1 -> Get Element Dimensions

const div = document.querySelector(".box"); // Select the DIV element.
const measureButton = document.querySelector("#measure-btn");

const steps = document.querySelector("#steps");
const codeResult = document.querySelector("#code-result");
const result = document.querySelector("#result");

measureButton.addEventListener("click", function () {
  // Get the visible width of the DIV, including padding.
  const width = div.clientWidth;

  // Get the visible height of the DIV, including padding.
  const height = div.clientHeight;

  // Display the steps performed by JavaScript.
  steps.innerHTML = `
    1. Selected the DIV element from the HTML page.<br>
    2. Read its clientWidth property.<br>
    3. Read its clientHeight property.
  `;

  // Display the JavaScript code that was executed.
  codeResult.textContent = `
  div.clientWidth;
  div.clientHeight;
  `;

  // Display the measured dimensions on the page.
  result.textContent = `Width: ${width}px | Height: ${height}px`;
});

/*
 * !NOTE:
 *
 * clientWidth:
 * Returns the inner width of an element, including padding.
 *
 * clientHeight:
 * Returns the inner height of an element, including padding.
 *
 * Both properties exclude:
 * - Borders
 * - Margins
 * - Scrollbars (when present)
 *
 * Example:
 * If width is 250px, padding is 15px on each side,
 * and border is 5px on each side:
 *
 * clientWidth --> 280px
 *
 * Remember:
 * These properties return numbers, not strings.
 */
