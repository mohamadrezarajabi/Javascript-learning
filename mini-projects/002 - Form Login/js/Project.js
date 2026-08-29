const userNameInput = document.querySelector(".input-username");
const passwordInput = document.querySelector(".input-password");
const msgUsername = document.querySelector(".message-username");
const msgPassword = document.querySelector(".message-password");
const btnLogin = document.querySelector("#btn-login");
const screenModal = document.querySelector(".modal-screen");
const imgModal = document.querySelector(".model-img");
const pModal = document.querySelector(".modal-card p");
const btnModal = document.querySelector(".modal-button");

btnLogin.addEventListener("click", function () {
  const username = userNameInput.value;
  const password = passwordInput.value;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/;

  if (username.length <= 3) {
    msgUsername.classList.remove("hidden");
  } else {
    msgUsername.classList.add("hidden");
  }

  if (password.length < 8) {
    msgPassword.classList.remove("hidden");
  }

  if (regex.test(password)) {
    msgPassword.classList.add("hidden");
  } else {
    msgPassword.classList.remove("hidden");
    msgPassword.innerHTML = "گذرواژه باید شامل حروف بزرگ,کوچک و علامت باشد";
    msgPassword.style.fontSize = "14px";
  }

  if (password.length >= 8 && regex.test(password) && username.length > 3) {
    imgModal.setAttribute("src", "images/success.png");
    pModal.innerHTML = "عملیات با موفقیت انجام شد";
    screenModal.classList.remove("hidden");
  } else {
    imgModal.setAttribute("src", "images/failed.png");
    pModal.innerHTML = "عملیات با موفقیت انجام نشد";
    screenModal.classList.remove("hidden");
  }
});

btnModal.addEventListener("click", function () {
  screenModal.classList.add("hidden");
});