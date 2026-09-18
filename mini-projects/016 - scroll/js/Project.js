/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const headerElem = document.querySelector(".site-header");

document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop >= 90) {
    headerElem.classList.add("hide");
  } else {
    headerElem.classList.remove("hide");
  }
})