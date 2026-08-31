const divPressElem = document.querySelector(".press-any-key")
const spanElem = document.querySelector(".key-name")
const h1Elem = document.querySelector("h1")
const contentClass = document.querySelector(".content")

const divChild1 = document.querySelector(".data1")
const divChild2 = document.querySelector(".data2")
const divChild3 = document.querySelector(".data3")
const divChild4 = document.querySelector(".data4")

document.addEventListener("keyup", function (event) {
  event.preventDefault();
  divPressElem.style.display = "none"
  document.body.classList.add("key-pressed")
  contentClass.classList.remove("hidden")
  console.log(event);
  spanElem.textContent = event.key
  h1Elem.textContent = event.keyCode
  divChild1.textContent = event.key
  divChild2.textContent = event.location
  divChild3.textContent = event.code 
  divChild4.textContent = event.which
});