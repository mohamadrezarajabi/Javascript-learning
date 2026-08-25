/*
 * classList --> lets you add/remove/toggle CSS classes on an element
 * without touching inline styles directly
 */

const titleElem = document.querySelector("#title");

titleElem.classList.add("hidden");    // adds the class --> element disappears
titleElem.classList.remove("hidden"); // removes the class --> element shows again
titleElem.classList.toggle("hidden"); // if class exists remove it, if not add it (switch)

console.log(titleElem.classList.contains("hidden")); // true/false --> check if class exists

/*
 * NOTE!
 * classList is better than className = "..." because it doesn't
 * overwrite OTHER existing classes on the element, it only edits the one you target
 */