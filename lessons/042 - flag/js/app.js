/*
 * Flag --> a boolean variable used to track ON/OFF state
 * or to control whether some action should happen
 */

let isLoggedIn = false; // flag --> starts OFF

function login() {
  isLoggedIn = true; // flag turned ON
}

function checkAccess() {
  if (isLoggedIn) {
    console.log("Welcome!");
  } else {
    console.log("Please log in first");
  }
}

login();
checkAccess(); // "Welcome!"

/*
 * flags are commonly used to avoid repeated actions
 * e.g. isLoading, hasError, isSubmitted, isModalOpen
 */