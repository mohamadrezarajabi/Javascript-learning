const btnEyeElem = document.querySelector(".eye-btn");
const inputElemPassword = document.querySelector("#password");

let showStatus = false;

btnEyeElem.addEventListener("click", function () {
  if (showStatus) {
    inputElemPassword.setAttribute("type", "password");
    btnEyeElem.classList.remove("is-visible");
    showStatus = false;
  } else {
    inputElemPassword.setAttribute("type", "text");
    btnEyeElem.classList.add("is-visible");
    showStatus = true;
  }
});