/*
 * DOM Navigation --> moving between elements using their relationships
 * (parent, children, siblings) instead of re-querying the document each time
 */

const h1Title1 = document.querySelector(".h1-title-1");
const h1Title2 = document.querySelector(".h1-title-2");
const h1Title3 = document.querySelector(".h1-title-3");
const h1Title4 = document.querySelector(".h1-title-4");
const h1Title5 = document.querySelector(".h1-title-5");
const h1Title6 = document.querySelector(".h1-title-6");
const listElem = document.querySelector(".list");
const resultsElem = document.querySelector("#results");

// helper --> writes each result as a new <li> on the page instead of console.log
function show(label, value) {
  const li = document.createElement("li");
  li.innerHTML = `${label}: <span>${value}</span>`;
  resultsElem.append(li);
}

// ElementSibling versions --> skip whitespace/text, only real ELEMENTS
show("h1Title3.previousElementSibling.previousElementSibling", h1Title3.previousElementSibling.previousElementSibling.textContent);
show("h1Title3.nextElementSibling.nextElementSibling", h1Title3.nextElementSibling.nextElementSibling.textContent);

// plain Sibling versions --> include TEXT NODES too (whitespace between tags counts!)
show("h1Title3.nextSibling x4 (includes text nodes)", h1Title3.nextSibling.nextSibling.nextSibling.nextSibling.textContent);
show("h1Title3.previousSibling x2 (includes text nodes)", h1Title3.previousSibling.previousSibling.textContent);

show("h1Title2.parentElement", h1Title2.parentElement.className);

show("listElem.children count", listElem.children.length); // HTMLCollection of the 3 <li> elements
show("listElem.childElementCount", listElem.childElementCount); // 3

show("listElem.firstChild", listElem.firstChild.textContent || "(text node / whitespace)");
show("listElem.firstElementChild.nextElementSibling", listElem.firstElementChild.nextElementSibling.textContent);

show("listElem.lastChild.previousSibling", listElem.lastChild.previousSibling.textContent || "(text node / whitespace)");
show("listElem.lastElementChild", listElem.lastElementChild.textContent);

show("listElem.hasChildNodes()", listElem.hasChildNodes());

listElem.firstElementChild.style.color = "red"; // colors "First Item" red --> visible directly on page

/*
 !NOTE: "Sibling"/"Child" (no "Element") includes TEXT NODES from whitespace
 * in your HTML (line breaks/indentation count as text nodes!) --> unpredictable
 * "ElementSibling"/"ElementChild" versions skip text nodes and only give you
 * real HTML elements --> almost always the safer, more predictable choice
 */