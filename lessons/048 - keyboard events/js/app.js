/*
 * onKeyPress - onKeyDown - onKeyUp --> keyboard events, fire in this order:
 * keydown (key pressed down) -> keypress (deprecated, chars only) -> keyup (key released)
 */

const usernameInput = document.querySelector("#username");
const usernameHint = document.querySelector("#usernameHint");
const passwordInput = document.querySelector("#password");
const passwordHint = document.querySelector("#passwordHint");

// keyup --> best choice here, fires AFTER the value updates (live feedback UX)
usernameInput.addEventListener("keyup", function () {
  const len = usernameInput.value.length; // current length of typed text

  if (len >= 3 && len <= 15) {
    usernameHint.textContent = "Looks good ";
    usernameHint.className = "hint valid"; // green feedback
  } else {
    usernameHint.textContent = "3-15 characters";
    usernameHint.className = "hint invalid"; // red feedback
  }
});

// live password strength hint on keyup
passwordInput.addEventListener("keyup", function () {
  const len = passwordInput.value.length;

  if (len < 3) {
    passwordHint.textContent = "Strength: -";
    passwordHint.className = "hint";
  } else if (len < 6) {
    passwordHint.textContent = "Strength: --";
    passwordHint.className = "hint invalid";
  } else {
    passwordHint.textContent = "Strength: ---";
    passwordHint.className = "hint valid";
  }
});

/*
 * !NOTE: keydown fires BEFORE the input's value updates,
 * so reading input.value inside keydown gives the PREVIOUS value, not the new one
 * that's why keyup (or "input" event) is the right choice for live validation UX
 */