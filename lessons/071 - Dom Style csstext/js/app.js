/*
 * style.cssText --> sets MANY inline CSS properties at once using a single string
 * alternative to setting each property one by one with element.style.property
 */

const titleElement = document.querySelector(".demo-title");
const statusElem = document.querySelector("#status");
const styleBox = document.querySelector("#styleBox");

// helper --> shows the element's real inline style attribute on the page
function showStyleAttr() {
  styleBox.textContent = `style attribute: ${titleElement.getAttribute("style") || "(empty)"}`;
}

// way 1 --> one property at a time (camelCase names: backgroundColor, not background-color)
function addStylesOneByOne() {
  titleElement.style.color = "orange";
  titleElement.style.backgroundColor = "black";
  titleElement.style.display = "inline";

  statusElem.textContent = "Applied 3 properties, one by one";
  showStyleAttr();
}

// way 2 --> all at once with cssText (normal CSS syntax: background-color with a dash)
function addStylesWithCssText() {
  titleElement.style.cssText =
    "color: orange; background-color: black; display: inline;";

  statusElem.textContent = "Applied 3 properties at once with cssText";
  showStyleAttr();
}

function resetStyles() {
  titleElement.style.cssText = ""; // clears ALL inline styles
  statusElem.textContent = "Styles reset";
  showStyleAttr();
}

document.querySelector("#singleBtn").addEventListener("click", addStylesOneByOne);
document.querySelector("#cssTextBtn").addEventListener("click", addStylesWithCssText);
document.querySelector("#resetBtn").addEventListener("click", resetStyles);

/*
 * !NOTE: cssText REPLACES the whole inline style attribute, it doesn't add to it
 * any inline style that existed before gets wiped out --> use += to append instead:
 * element.style.cssText += "color: red;"
 * also: .style.property uses camelCase (backgroundColor), cssText uses normal CSS (background-color)
 */