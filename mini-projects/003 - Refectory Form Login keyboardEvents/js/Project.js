const userNameInput = document.querySelector(".input-username");
const passwordInput = document.querySelector(".input-password");
const msgUsername = document.querySelector(".message-username");
const msgPassword = document.querySelector(".message-password");
const btnLogin = document.querySelector("#btn-login");
const screenModal = document.querySelector(".modal-screen");
const imgModal = document.querySelector(".model-img");
const pModal = document.querySelector(".modal-card p");
const btnModal = document.querySelector(".modal-button");

let usernameStatus = false;
let passwordStatus = false;

userNameInput.addEventListener("keyup", function () {
  const username = userNameInput.value.length;

  if (username === 0) {
    msgUsername.classList.add("hidden");
  } else if (username <= 3) {
    msgUsername.classList.remove("hidden");
    msgUsername.innerHTML = "نام کاربری باید بیش از 3 کارکتر باشد";
    msgUsername.className = "message message-username";
  } else if (username > 3) {
    msgUsername.classList.remove("hidden");
    msgUsername.innerHTML = "نام کاربری صحیح است";
    msgUsername.className = "message-username success";
    usernameStatus = true
  }
});

passwordInput.addEventListener("keyup", function () {
  const password = passwordInput.value;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/;

  if (password.length === 0) {
    msgPassword.classList.add("hidden");
  } else if (password.length < 8){
    msgPassword.classList.remove("hidden")
    msgPassword.innerHTML = "گذرواژه باید بیش از 8 کارکتر باشد"
    msgPassword.className = "message message-password"
  } else if (!regex.test(password)) {
    msgPassword.classList.remove("hidden");
    msgPassword.innerHTML = "گذرواژه باید شامل حروف بزرگ,کوچک و علامت باشد";
    msgPassword.style.fontSize = "14px";
    msgPassword.className = "message message-password"
  } else{
    msgPassword.classList.remove("hidden");
    msgPassword.innerHTML = "گذرواژه صحیح میباشد"
    msgPassword.className = "message-password success"
    passwordStatus = true;
  }
})

btnLogin.addEventListener("click", function () {
  if (usernameStatus && passwordStatus){
    imgModal.setAttribute("src", "/assets/002 - Form Login/success.png");
    pModal.innerHTML = "عملیات با موفقیت انجام شد";
    screenModal.classList.remove("hidden");
  } else {
    imgModal.setAttribute("src", "/assets/002 - Form Login/failed.png");
    pModal.innerHTML = "عملیات با موفقیت انجام نشد";
    screenModal.classList.remove("hidden");
  }
})

btnModal.addEventListener("click", function () {
  screenModal.classList.add("hidden");
});