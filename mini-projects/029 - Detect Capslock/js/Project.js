/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const capsKeycircle = document.querySelector(".caps-indicator ");
const text = document.querySelector(".typing-area");

document.body.addEventListener("keyup", function (event) {
  const ignoredKeys = ["Tab", "Shift", "Alt", "Control", "CapsLock", "Enter"];

  if (event.getModifierState("CapsLock")) {
    capsKeycircle.classList.add("is-active");
  } else {
    capsKeycircle.classList.remove("is-active");
    if (event.key === "Backspace") {
      const textFilter = text.textContent.split("");
      textFilter.pop();
      text.textContent = textFilter.join("");
    } else {
      if (event.key !== "CapsLock") {
        if (!ignoredKeys.includes(event.key)) {
          text.textContent += event.key;
        }
      }
    }
  }
});
