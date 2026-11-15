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

  if (optionSelected.length === 0) {
    inputPassword.value = "لطفاً حداقل یک گزینه انتخاب کنید";
    return;
  }
  let charRandom = "";
  let characters = "";
  let strength = 0;

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

  let hasBig = false;
  let hasSmall = false;
  let hasNum = false;
  let hasSpecial = false;

  charRandom = passwordArray.join("");

  charRandom.split("").forEach(function (character) {
    if (big.includes(character)) hasBig = true;
    if (small.includes(character)) hasSmall = true;
    if (num.includes(character)) hasNum = true;
    if (special.includes(character)) hasSpecial = true;
  });

  let typeCount = 0;

  if (hasBig) typeCount++;
  if (hasSmall) typeCount++;
  if (hasNum) typeCount++;
  if (hasSpecial) typeCount++;

  if (charRandom.length >= 8) strength++;
  if (charRandom.length >= 12) strength++;
  if (charRandom.length >= 16) strength++;
  if (typeCount >= 3) strength++;
  if (charRandom.length >= 20 && typeCount === 4) strength++;

  let strengthText = ["ضعیف", "ضعیف", "متوسط", "خوب", "قوی", "خیلی قوی"];

  titleStrength.textContent = strengthText[strength];

  line.forEach(function (item, index) {
    if (index < strength) {
      item.style.backgroundColor =
        strength <= 1
          ? "var(--strength-weak)"
          : strength <= 3
            ? "var(--strength-medium)"
            : "var(--strength-strong)";
    } else {
      item.style.backgroundColor = "var(--bg-option)";
    }
  });

  inputPassword.value = charRandom;
}

btnCopy.addEventListener("click", function () {
  inputPassword.select();
  document.execCommand("copy");
});

btnSubmit.addEventListener("click", passwordGenarator);
