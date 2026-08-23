/*
 * Events --> ways to run code when the user does something (click, type, etc)
 * 3 ways to attach an event:
 */

const btn = document.querySelector(".click-btn");
const itemElems = document.querySelectorAll(".list-item");

//* Way 1 --> inline HTML (onclick="...") --> not recommended, mixes JS with HTML

//* Way 2 --> assign directly to a property
// btn.onclick = logger;
// function logger() {}
// downside: can only hold ONE handler --> assigning a new one overwrites the old

//* Way 3 --> addEventListener (best practice, supports MULTIPLE handlers)
btn.addEventListener("click", function () {
  console.log("Clicked!");
  itemElems.forEach(function (li) {
    li.style.backgroundColor = "yellow";
    li.style.fontWeight = "bold";
  });
});

// dblclick --> fires only on a DOUBLE click
btn.addEventListener("dblclick", function () {
  console.log("Double Clicked!");
  itemElems.forEach(function (li) {
    li.style.textDecoration = "line-through";
  });
});

/*
 * NOTE!
 * addEventListener lets you add MULTIPLE listeners on the same element/event
 * without overwriting each other (unlike onclick = ...)
 */