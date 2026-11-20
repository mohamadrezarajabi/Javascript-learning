const inputUserName = document.querySelector("#inputUsername");
const inputPassword = document.querySelector("#inputPassword");
const inputPasswordShow = document.querySelector(".password-toggle");
const signButton = document.querySelector(".sign-in-button");
const loginForm = document.querySelector(".login-form");

let statusUserName = false;
let statusPassword = false;

function statusDisabled(cursor, color) {
  signButton.style.cssText = `
  background-color: ${color};
  cursor: ${cursor};
`;
}

function checkFormStatus() {
  if (statusUserName && statusPassword) {
    signButton.disabled = false;
    statusDisabled("pointer", "var(--color-primary)");
  } else {
    signButton.disabled = true;
    statusDisabled("no-drop", "#477c617a");
  }
}

if (signButton.disabled) {
  statusDisabled("no-drop", "#477c617a");
}

inputUserName.addEventListener("keyup", function () {
  const usernameRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;
  const username = inputUserName.value;
  const usernameLength = username.length;

  if (
    usernameLength < 8 ||
    usernameLength > 15 ||
    !usernameRegex.test(username)
  ) {
    inputUserName.parentElement.classList.remove("valid");
    inputUserName.parentElement.classList.add("invalid");
    statusUserName = false;
  } else {
    inputUserName.parentElement.classList.remove("invalid");
    inputUserName.parentElement.classList.add("valid");
    statusUserName = true;
  }
  checkFormStatus();
});

inputPassword.addEventListener("keyup", function () {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

  if (passwordRegex.test(inputPassword.value)) {
    inputPassword.parentElement.classList.remove("invalid");
    inputPassword.parentElement.classList.add("valid");
    statusPassword = true;
  } else {
    inputPassword.parentElement.classList.remove("valid");
    inputPassword.parentElement.classList.add("invalid");
    statusPassword = false;
  }
  checkFormStatus();
});

inputPasswordShow.addEventListener("click", function () {
  const eyeIcon = `<svg viewBox="0 0 24 24" aria-hidden="true">
  <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"></path>
  <circle cx="12" cy="12" r="3"></circle>
    </svg>`;

  const eyeOffIcon = `<svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"></path>
                    <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.3 4.5 9 7-.3 1.1-1.2 2.5-2.5 3.7M6.2 6.2C3.8 7.7 2.3 10 2 12c.7 2.5 4 7 10 7 1.1 0 2.1-.2 3-.5"></path>
                  </svg>`;
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    inputPasswordShow.innerHTML = eyeIcon;
  } else {
    inputPassword.type = "password";
    inputPasswordShow.innerHTML = eyeOffIcon;
  }
});


loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (statusUserName && statusPassword) {
    location.href = "https://mohamadrezarajabi.ir";
  }
});
