const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* -------------------- loader ---------------- */

const loginButton = document.querySelector(".login-button");
const modalScreen = document.querySelector(".modal-screen");
const modal = document.querySelector(".modal");

const closeBtn = document.querySelector(".close");
const closeXBtn = document.querySelector(".close-x-btn");
const continueBtn = document.querySelector(".continue");

function showModal() {
  modalScreen.classList.remove("hidden");

  document.body.style.overflow = "hidden";

  setTimeout(function () {
    modal.querySelector("button").focus();
  }, 100);
}

function hideModal() {
  modalScreen.classList.add("hidden");

  document.body.style.overflow = "";
}

loginButton.addEventListener("click", showModal);

closeBtn.addEventListener("click", hideModal);

closeXBtn.addEventListener("click", hideModal);

continueBtn.addEventListener("click", hideModal);

modalScreen.addEventListener("click", function (event) {
  if (event.target === modalScreen) {
    hideModal();
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    hideModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !modalScreen.classList.contains("hidden")) {
    const activeElement = document.activeElement;

    if (activeElement === closeXBtn || activeElement === closeBtn) {
      hideModal();
    }
  }
});
