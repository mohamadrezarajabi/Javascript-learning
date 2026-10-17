/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const root = document.querySelector(":root");
const switchBtn = document.querySelector(".switch");
const switchBtnCircle = document.querySelector(".switch__knob");
const cardsbtn = document.querySelectorAll(".card");
const colorAccentSwatch = document.querySelectorAll(".swatch");
const colorsaveBtn = document.querySelector(".save-color");
const randomColor = document.querySelector(".picker__input");
const randomColorHex = document.querySelector(".picker__hex");


if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "light");
}
if (localStorage.getItem("mode") === "dark") {
  switchBtnCircle.style.cssText = "left: 20px;";
  root.dataset.mode = "dark";
  localStorage.setItem("mode", "dark");
}

switchBtn.addEventListener("click", function () {
  if (localStorage.getItem("mode") === "light") {
    switchBtnCircle.style.cssText = "left: 20px;";
    root.dataset.mode = "dark";
    localStorage.setItem("mode", "dark");
  } else if (localStorage.getItem("mode") === "dark") {
    switchBtnCircle.style.cssText = "left: 3px;";
    root.dataset.mode = "light";
    localStorage.setItem("mode", "light");
  }
});

const savedTheme = localStorage.getItem("theme");

function statusPressed(cardPressed, elementName) {
  elementName.forEach(function (card) {
    card.setAttribute("aria-pressed", "false");
  });

  cardPressed.setAttribute("aria-pressed", "true");
}

function statusSave(theme) {
  root.dataset.theme = theme;

  cardsbtn.forEach(function (card) {
    const active = card.dataset.themeOption === theme;

    card.setAttribute("aria-pressed", String(active));
  });
}

statusSave(savedTheme || "forest");

function setcard(card) {
  const name = card.dataset.themeOption;

  root.dataset.theme = name;
  localStorage.setItem("theme", name);

  statusPressed(card, cardsbtn);
}

cardsbtn.forEach(function (card) {
  card.addEventListener("click", function (event) {
    setcard(event.currentTarget);
  });
});

const colorSwatch = localStorage.getItem("color-swatch");
const colorSwatchName = localStorage.getItem("color-swatch__name");

let color = null;
let colorBtnName = null;

if (colorSwatch) {
  const savedColorBtn = [...colorAccentSwatch].find(function (card) {
    return card.dataset.accentOption === colorSwatchName;
  });

  if (savedColorBtn) {
    statusPressed(savedColorBtn, colorAccentSwatch);
  }
  root.style.setProperty("--accent", colorSwatch);
  color = colorSwatch;
  randomColor.value = color
  randomColorHex.textContent = color
  colorBtnName = colorSwatchName;
} else {
  root.style.setProperty("--accent", "#10b981");
  statusPressed(colorAccentSwatch[0], colorAccentSwatch);
}

colorAccentSwatch.forEach(function (colorSet) {
  colorSet.addEventListener("click", function (event) {
    statusPressed(event.currentTarget, colorAccentSwatch);

    root.style.setProperty(
      "--accent",
      event.currentTarget.dataset.accentOption,
    );

    colorBtnName = event.currentTarget.dataset.accentOption;
    color = event.currentTarget.dataset.accentOption;
  });
});

randomColor.addEventListener("input", function (event) {
  color = event.currentTarget.value;
  colorBtnName = null;

  root.style.setProperty("--accent", color);
  randomColorHex.textContent = color;

  colorAccentSwatch.forEach(function (swatch) {
    swatch.setAttribute("aria-pressed", "false");
  });
});

randomColor.addEventListener("change", function () {
  localStorage.setItem("color-swatch", color);
  localStorage.removeItem("color-swatch__name");
});

colorsaveBtn.addEventListener("click", function () {
  if (color) {
    localStorage.setItem("color-swatch", color);
    localStorage.setItem("color-swatch__name", colorBtnName);
  } else {
    localStorage.setItem("color-swatch", "#10b981");
  }
});
