/*
 * createElement --> builds a NEW element in memory (not yet on the page)
 * you must set its properties/attributes, then append it to the DOM to see it
 */

//* 1 - create a single element and set every kind of property on it
const h1Elem = document.createElement("h1"); // creates <h1></h1> in memory

h1Elem.innerHTML = "Skills Overview"; // sets the text/HTML content

h1Elem.setAttribute("id", "title"); // sets the id attribute (same as h1Elem.id = "title")

h1Elem.className = "title"; // sets class (same as h1Elem.setAttribute("class", "title"))

h1Elem.style.color = "#f38ba8"; // inline CSS --> overridden below by real color anyway
h1Elem.style.fontSize = "28px"

document.body.append(h1Elem); // ATTACH it to the page --> now it's visible

//* 2 - build a list of items and append them one by one
const skillsListElem = document.createElement("ul");
skillsListElem.className = "skills-list";

const skills = ["JavaScript", "Python", "Git & GitHub"];

skills.forEach(function (skill) {
  const liElem = document.createElement("li"); // new <li> each loop
  liElem.innerHTML = skill; // innerText --> plain text, safer than innerHTML
  skillsListElem.append(liElem); // add li INTO the ul (not the page yet)
});

document.body.append(skillsListElem); // now attach the whole ul at once

//* 3 - dynamically fill a <select> with <option> elements
const selectBoxElem = document.querySelector("#select-box");
const cities = ["Tehran", "Tabriz", "Shiraz"];

cities.forEach(function (city) {
  const optionElem = document.createElement("option");
  optionElem.value = city; // the VALUE sent on form submit
  optionElem.innerHTML = city; // the TEXT shown to the user
  selectBoxElem.append(optionElem);
});

/*
 * !NOTE: nothing appears on the page until .append() (or similar) is called
 * createElement only builds the element in memory --> it's invisible until attached
 * innerText vs innerHTML: innerText is safer (no HTML parsing/injection risk)
 */