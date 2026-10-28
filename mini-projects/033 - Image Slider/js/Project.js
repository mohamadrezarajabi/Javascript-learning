/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

let index = 0;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");

function isActive(index) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

function setNext() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  isActive(index);
}

function setPrev() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  isActive(index);
}

next.addEventListener("click", setNext);
prev.addEventListener("click", setPrev);

setInterval(setNext, 4000);
