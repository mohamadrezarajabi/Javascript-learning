/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const toastElem = document.querySelector(".toast");
const success = document.querySelector(".success");
const error = document.querySelector(".error");
const warning = document.querySelector(".warning");
const info = document.querySelector(".info");

const toast = [
  {
    status: "Success",
    img: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#61b31c"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-check preview-icon"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m16 9-5.5 5.5L8 12" />
          </svg>`,
    subtitle: "Your action was completed seccessfully",
  },
  {
    status: "Error",
    img: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cc3232"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-x preview-icon"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>`,
    subtitle: "Something went wrong, Please Try Again",
  },
  {
    status: "Warning",
    img: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d4b506"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-triangle-exclamation-point preview-icon"
          >
            <path
              d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
            />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>`,
    subtitle: "Please check your input.Please Try again",
  },
  {
    status: "Info",
    img: `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1c88b3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-exclamation-point preview-icon"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>`,
    subtitle: "Here's some information for you",
  },
];

let toastTimer;

function showToast(toast) {
  clearTimeout(toastTimer);
  toastElem.innerHTML = `
      <div class="toast-icon">${toast.img}</div>

      <div class="toast-content">
        <h4 class="toast-title">${toast.status}</h4>
        <p class="toast-message">${toast.subtitle}</p>
      </div>

      <button class="toast-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x preview-icon"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>

      <div class="toast-progress">
        <div class='toast-progress-bar'></div>
      </div>
    `;

  toastElem.className = `toast ${toast.status}`;

  toastElem.classList.remove("hide");
  toastElem.classList.add("show");

  function timeout() {
    toastElem.classList.add("hide");
    toastElem.classList.remove("show");
  }

  toastTimer = setTimeout(timeout, 5000);

  const toastClose = toastElem.querySelector(".toast-close");

  toastClose.addEventListener("click", function () {
    toastElem.classList.add("hide");
    toastElem.classList.remove("show");
    clearTimeout(toastTimer);
  });

  const progressBar = toastElem.querySelector(".toast-progress-bar");

  progressBar.style.width = "0%";

  setTimeout(function () {
    progressBar.style.width = "100%";
  }, 50);
}

success.addEventListener("click", function () {
  showToast(toast[0]);
  toastElem.style.cssText = `background-color: #83bf834f;
  border: 1px solid #5ba259;`;
});
error.addEventListener("click", function () {
  showToast(toast[1]);
  toastElem.style.cssText = `background-color: #bf83834f;
  border: 1px solid #a25959;`;
});
warning.addEventListener("click", function () {
  showToast(toast[2]);
  toastElem.style.cssText = `background-color: #bfbb8356;
  border: 1px solid #a1a259;`;
});
info.addEventListener("click", function () {
  showToast(toast[3]);
  toastElem.style.cssText = `background-color: #8393bf4f;
  border: 1px solid #5e59a2;`;
});
