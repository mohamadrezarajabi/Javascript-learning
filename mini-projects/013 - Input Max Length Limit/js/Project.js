const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* -------------------- loader ---------------- */

const inputElem = document.querySelector("input");
const circleElem = document.querySelector(".circle");
const btnElem = document.querySelector(".input-card button");

inputElem.addEventListener("input", function () {
  const valueInput = inputElem.value;

  if (!valueInput.startsWith("09") ||valueInput.length !== 11 ||isNaN(valueInput)) {
    inputElem.style.border = "1px solid #c42b2b";
    btnElem.style.backgroundImage = "var(--gradient-primary-disabled)"
    btnElem.disabled = true
  } else {
    inputElem.style.border = "1px solid var(--color-primary)";
    btnElem.style.backgroundImage = "var(--gradient-primary)"
    btnElem.disabled = false
  }

  circleElem.textContent = 11 - valueInput.length;
});
