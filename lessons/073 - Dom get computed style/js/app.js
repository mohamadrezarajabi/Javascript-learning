/*
 * getComputedStyle(element) --> returns ALL the final CSS styles the browser
 * is really using on an element (even ones written in your CSS file, not inline)
 */

const divElem = document.querySelector(".box");

const bgColorElem = document.querySelector("#bgColor");
const widthElem = document.querySelector("#width");
const heightElem = document.querySelector("#height");

const divElemStyles = getComputedStyle(divElem); // object holding every final style
bgColorElem.innerHTML = divElemStyles.backgroundColor; // "rgb(243, 139, 168)"

// getPropertyValue("width") --> reads one property by its normal CSS name
const divElemWidth = getComputedStyle(divElem).getPropertyValue("width");
const divElemHeight = getComputedStyle(divElem).getPropertyValue("height");

widthElem.innerHTML = divElemWidth;   // real size in px, e.g. "160px" (not "50%")
heightElem.innerHTML = divElemHeight; // "80px"

/*
 * !NOTE: element.style.width only reads INLINE styles (style="..." in HTML)
 * so for a width written in the CSS file it gives an empty string
 * getComputedStyle reads the final value from ANY source (CSS file, inline, etc)
 * also the result is always in px and colors come back as rgb(), even if you wrote 50% or hex
 */