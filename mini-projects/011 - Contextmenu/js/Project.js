const contextmenu = document.querySelector(".contextmenu");

function showContextmenu(event) {
  event.preventDefault();

  contextmenu.classList.remove("hidden");

  const menuWidth = contextmenu.offsetWidth;
  const menuHeight = contextmenu.offsetHeight;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  let left = event.clientX;
  let top = event.clientY;

  if (left + menuWidth > windowWidth) {
    left = windowWidth - menuWidth;
  }
  if (top + menuHeight > windowHeight) {
    top = windowHeight - menuHeight;
  }

  contextmenu.style.left = `${left}px`;
  contextmenu.style.top = `${top}px`;
}

document.addEventListener("contextmenu", showContextmenu);

document.addEventListener("click", function () {
  contextmenu.classList.add("hidden");
});