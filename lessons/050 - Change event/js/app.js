/*
 * change event --> fires when an element's value changes AND it loses focus
 * (unlike "input"/"keyup" which fire on every single keystroke)
 */

const textInput = document.querySelector(".text-input");
const checkInput = document.querySelector(".check-input");
const citiesSelectBox = document.querySelector("#cities");

// text input --> "change" only fires once you click away (blur), not while typing
textInput.addEventListener("change", function () {
  console.log("Input Changed ->", textInput.value);
});

// checkbox --> "change" fires immediately on check/uncheck (no blur needed)
checkInput.addEventListener("change", function () {
  console.log("CheckBox Changed ->", checkInput.checked); // true/false
});

// select box --> "change" fires as soon as a new option is picked
citiesSelectBox.addEventListener("change", function () {
  console.log("City Changed ->", citiesSelectBox.value);
});

// alternative way --> inline HTML attribute onchange="selectCity()"
function selectCity() {
  console.log("City Changed -> ", citiesSelectBox.value);
}

/*
 * !NOTE: for text inputs, "input" event fires on every keystroke,
 * but "change" waits until the element loses focus (blur) --> different UX use cases
 * for checkbox/select, "change" fires instantly since there's no "typing" to wait for
 */