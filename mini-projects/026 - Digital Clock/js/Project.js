/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const btnColors = document.querySelectorAll(".btn-color");
const root = document.querySelector(":root");

if (localStorage.getItem("color")) {
  root.style.setProperty("--color-clock-text", localStorage.getItem("color"));
  root.style.setProperty("--color-clock-frame", localStorage.getItem("color"));
} else {
  root.style.setProperty("--color-clock-frame", "#00c8ff");
}

btnColors.forEach(function (color) {
  color.addEventListener("click", function (event) {
    const selectedColor = event.currentTarget.dataset.color;

    root.style.setProperty("--color-clock-text", selectedColor);
    root.style.setProperty("--color-clock-frame", selectedColor);
    localStorage.setItem("color", selectedColor);
  });
});

const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const hours = document.querySelector(".hours");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const mon = document.querySelector(".mon");
const week = document.querySelector(".week");
const day = document.querySelector(".day");

setInterval(() => {
  const date = new Date();

  const hoursDate = String(date.getHours()).padStart(2, "0");
  const minDate = String(date.getMinutes()).padStart(2, "0");
  const secDate = String(date.getSeconds()).padStart(2, "0");

  hours.textContent = hoursDate;
  min.textContent = minDate;
  sec.textContent = secDate;
}, 1000);

const date = new Date();

mon.textContent = Months[date.getMonth()];
week.textContent = weeks[date.getDay()];
day.textContent = date.getDate();
