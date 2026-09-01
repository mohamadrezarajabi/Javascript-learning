/*
 * .remove() --> completely deletes an element from the DOM (removes it from the page)
 */

//* Example 1 --> remove a fixed, specific element via a dedicated button
const removeBtn = document.querySelector(".remove-btn");
const titleElem = document.querySelector(".title");

removeBtn.addEventListener("click", function () {
  titleElem.remove(); // deletes the <h1> completely, gone from the DOM
});

//* Example 2 --> remove ANY clicked item using event.target (dynamic, works on all items)
const listItems = document.querySelectorAll(".list-item");
const pStatus = document.querySelector(".status");

listItems.forEach(function (listItem) {
  listItem.addEventListener("click", function (event) {
    event.target.remove(); // removes ONLY the specific <li> that was clicked
    pStatus.textContent = "Item removed ✓";
  });
});

/*
 !NOTE: event.target is the EXACT element that triggered the event
 * inside the forEach, "listItem" also refers to the same element here,
 * but event.target is essential when the listener is on a PARENT
 * and you need to know which CHILD was actually clicked (event delegation)
 */