/*
 * Node !== Node.js --> completely different things with the same name
 * Node (here) --> a built-in JS interface/type, every DOM element/text/comment is a "Node"
 * Node.js --> a separate runtime for running JS outside the browser (server-side)
 */

const titleElem = document.querySelector(".title");
const resultsElem = document.querySelector("#results");

console.log(titleElem.nodeType); // 1 --> numeric code representing the node's type
console.log(titleElem.nodeName); // "H1" --> tag name in uppercase

// Node.ELEMENT_NODE is just a readable CONSTANT that equals the number 1
console.log(titleElem.nodeType === Node.ELEMENT_NODE); // true --> 1 === 1

// the whole document itself is ALSO a Node, but a different type
console.log(document.nodeType === Node.DOCUMENT_NODE); // true --> 9 === 9

// showing it on the page instead of console
function addResult(label, value) {
  const li = document.createElement("li");
  li.innerHTML = `${label}: <span>${value}</span>`;
  resultsElem.append(li);
}

addResult("titleElem.nodeType", titleElem.nodeType);
addResult("titleElem.nodeName", titleElem.nodeName);
addResult("is ELEMENT_NODE?", titleElem.nodeType === Node.ELEMENT_NODE);
addResult("document is DOCUMENT_NODE?", document.nodeType === Node.DOCUMENT_NODE);

/*
 !NOTE: Node.ELEMENT_NODE (1), Node.TEXT_NODE (3), Node.DOCUMENT_NODE (9) and ....
 * are just named constants for raw numbers --> using the name is way more
 * readable than hardcoding "if (nodeType === 1)" with a magic number
 */