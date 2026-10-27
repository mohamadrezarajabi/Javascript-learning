/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const text = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

const captchaText = document.querySelector(".captcha-text");
const btnRefresh = document.querySelector(".btn-refresh");
const captchaInput = document.querySelector("#captcha-input");
const captchaForm = document.querySelector(".captcha-form");
const btnSubmit = document.querySelector(".btn-submit");
const toast = document.querySelector(".toast");
const toastClose = document.querySelector(".toast-close");
const progressBar = document.querySelector(".progress-bar");

function randomCaptcha() {
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * text.length);
    captcha += text[random];
  }
  return captcha;
}

captchaText.textContent = randomCaptcha();

btnRefresh.addEventListener("click", function () {
  captchaText.textContent = randomCaptcha();
  captchaInput.value = "";
});

captchaForm.addEventListener("submit", function (event) {
  const toastIcon = document.querySelector(".toast-icon");
  const toastMessageP = document.querySelector(".toast-message p");

  event.preventDefault();

  if (captchaInput.value === captchaText.textContent) {
    toastIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"></path></svg>`;
    toastIcon.style.backgroundColor = "var(--color-success)";
    toastMessageP.textContent = "کد وارد شده صحیح میباشد";
    toast.style.cssText = `
    border-color: var(--color-success-border);
    background-color: var(--color-success-bg);
    `;
    progressBar.style.backgroundColor = "var(--color-success)";
    showToast();
  } else {
    toastIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x preview-icon"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
    toastIcon.style.backgroundColor = "var(--color-wrong)";
    toastMessageP.textContent = "کد وارد شده صحیح نمیباشد";
    toast.style.cssText = `
    border-color: var(--color-wrong-border);
    background-color: var(--color-wrong-bg);
    `;
    progressBar.style.backgroundColor = "var(--color-wrong)";
    showToast();
  }

  captchaText.textContent = randomCaptcha();
});

let toastTimer;
const duration = 5000;

function hideToast() {
  clearTimeout(toastTimer);
  toast.classList.add("hidden");
}

function showToast() {
  clearTimeout(toastTimer);

  toast.classList.remove("hidden");

  progressBar.style.transition = "none";
  progressBar.style.width = "0%";

  progressBar.offsetWidth;

  progressBar.style.transition = `width ${duration}ms linear`;
  progressBar.style.width = "100%";

  toastTimer = setTimeout(hideToast, duration);
}

toastClose.addEventListener("click", hideToast);
