/*
 * DOM --> Document Object Model
 * lets JS select and manipulate HTML elements
 */

// getElementsByTagName --> returns an HTMLCollection (array-like) of ALL matching tags
const h1Elems = document.getElementsByTagName("h1");

// getElementById --> returns a SINGLE Element (id must be unique)
const listElem = document.getElementById("list");

// getElementsByClassName --> returns an HTMLCollection of ALL matching class
const liElems = document.getElementsByClassName("list-item");

// querySelector --> returns the FIRST matching Element (CSS selector syntax)
const textElem = document.querySelector(".list-item");

// querySelectorAll --> returns a NodeList (array-like) of ALL matching elements
const itemElems = document.querySelectorAll(".list-item");
console.log(itemElems);


//!NOTE
/*
 * HTMLCollection (getElementsBy...) updates LIVE if the DOM changes
 * NodeList (querySelectorAll) is STATIC --> a snapshot, doesn't auto-update
 * querySelector/querySelectorAll are more flexible (any CSS selector) and more common today
 */