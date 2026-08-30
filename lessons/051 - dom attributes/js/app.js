/*
 * hasAttribute / removeAttribute --> check for / delete an HTML attribute
 */

const input = document.querySelector("input");
const button = document.querySelector("button");
const status = document.querySelector(".status");

console.log(input.hasAttribute("style"));      // true --> we set style="color: blue" in HTML
console.log(input.hasAttribute("placeholder")); // true --> placeholder exists initially

button.addEventListener("click", function () {
  input.removeAttribute("placeholder"); // deletes the placeholder attribute completely

  // visible proof for the user --> placeholder text disappears from the input
  console.log(input.hasAttribute("placeholder")); // false --> now it's gone

  status.textContent = "Placeholder removed ✓";
  status.className = "status removed"; // turns text green as visual feedback
});
console.log(input.hasAttribute("placeholder")); // false


/*
 * !NOTE: removeAttribute fully deletes the attribute (placeholder shows nothing after)
 * that's different from setting input.placeholder = "" which just makes it an empty string
 * hasAttribute is useful to check existence BEFORE deciding to add/remove something
 */