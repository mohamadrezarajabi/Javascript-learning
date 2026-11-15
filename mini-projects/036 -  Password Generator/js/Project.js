/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const special = "!@#$%^&*";

const range = document.querySelector("#input-progress");
const inputPassword = document.querySelector(".input-password");
const btnCopy = document.querySelector(".btn-copy");
const countPassword = document.querySelector(".count-password");
const options = document.querySelectorAll(".option input");
const titleStrength = document.querySelector(".title-strength h3");
const line = document.querySelectorAll(".line");
const btnSubmit = document.querySelector(".btn-submit");

function updateRange() {
  const percentage =
    ((range.value - range.min) / (range.max - range.min)) * 100;

  range.style.background = `linear-gradient(
    to right,
    var(--primary) ${percentage}%,
    #343a43 ${percentage}%
  )`;

  countPassword.textContent = range.value;
}

range.addEventListener("input", updateRange);

updateRange();

const objectOptionSelected = {
  big: big,
  small: small,
  num: num,
  special: special,
};

function passwordGenarator() {
  const optionSelected = Array.from(options)
    .filter(function (option) {
      return option.checked;
    })
    .map(function (option) {
      return option.value;
    });

  let charRandom = "";
  let characters = "";

  optionSelected.forEach(function (option) {
    const selectedCharactrs = objectOptionSelected[option];

    const randomIndex = Math.floor(Math.random() * selectedCharactrs.length);

    charRandom += selectedCharactrs[randomIndex];
    characters += selectedCharactrs;
  });

  let remaining = range.value - charRandom.length;

  for (let i = 0; i < remaining; i++) {
    charRandom += characters[Math.floor(Math.random() * characters.length)];
  }

  let passwordArray = charRandom.split("");

  for (let i = 0; i < passwordArray.length; i++) {
    let randomIndex = Math.floor(Math.random() * passwordArray.length);

    let temp = passwordArray[i];
    passwordArray[i] = passwordArray[randomIndex];
    passwordArray[randomIndex] = temp;
  }

  charRandom = passwordArray.join("");

  console.log("Range:", range.value);
  console.log("Password length:", charRandom.length);

  inputPassword.value = charRandom;
}

btnSubmit.addEventListener("click", passwordGenarator);
