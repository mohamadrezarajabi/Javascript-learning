/*
 * insertAdjacentHTML(position, html) --> inserts new HTML at a specific spot
 * RELATIVE to the element, WITHOUT destroying/re-rendering existing content
 * (unlike innerHTML += "..." which re-parses everything and loses event listeners)
 */

const list = document.querySelector(".list");

// "beforebegin" --> OUTSIDE the element, right BEFORE it (as a sibling before)
document.querySelector("#beforeBeginBtn").addEventListener("click", function () {
  list.insertAdjacentHTML(
    "beforebegin",
    `<div><li><a>beforebegin</a></li></div>`
  );
});

// "afterbegin" --> INSIDE the element, as its FIRST child
document.querySelector("#afterBeginBtn").addEventListener("click", function () {
  list.insertAdjacentHTML(
    "afterbegin",
    `<div><li><a>afterbegin</a></li></div>`
  );
});

// "afterend" --> OUTSIDE the element, right AFTER it (as a sibling after)
document.querySelector("#afterEndBtn").addEventListener("click", function () {
  list.insertAdjacentHTML(
    "afterend",
    `<div><li><a>afterend</a></li></div>`
  );
});

// "beforeend" --> INSIDE the element, as its LAST child
document.querySelector("#beforeEndBtn").addEventListener("click", function () {
  list.insertAdjacentHTML(
    "beforeend",
    `<div><li><a>beforeend</a></li></div>`
  );
});

/*
 * !NOTE: picture the element's own tags as boundaries:
 * beforebegin --> outside, above     |  <ul>
 * afterbegin  --> inside, at the top |    afterbegin
 *                                    |    ...existing items...
 * beforeend   --> inside, at bottom  |    beforeend
 *                                    |  </ul>
 * afterend    --> outside, below     |  afterend
 *
 * this is much faster/safer than innerHTML += because it doesn't destroy
 * and rebuild elements that were already there (keeps their event listeners intact)
 */