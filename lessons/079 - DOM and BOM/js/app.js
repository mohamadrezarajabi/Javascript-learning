//* DOM -> Document Object Model
//* BOM -> Browser Object Model

console.log("[JS]");

// * window is the main object of the browser.
console.log(window);

// * Access the document through window.
console.log(window.document);

// * Select HTML elements using querySelector().
const titleElement = window.document.querySelector("h1");
const result = document.querySelector("#result");

const alertButton = document.querySelector("#alert-btn");
const confirmButton = document.querySelector("#confirm-btn");
const selectButton = document.querySelector("#select-btn");

// * Display a message using the browser's alert dialog.
alertButton.addEventListener("click", function () {
  window.alert("Test Message");
});

// * Get the user's confirmation.
confirmButton.addEventListener("click", function () {
  const isLogin = window.confirm("Is Login?");

  if (isLogin) {
    result.textContent = "Login confirmed!";
  } else {
    result.textContent = "Login cancelled.";
  }
});

// * Display the selected HTML element in the console.
selectButton.addEventListener("click", function () {
  console.log(titleElement);

  result.textContent = "The H1 element was selected. Check Console.";
});
