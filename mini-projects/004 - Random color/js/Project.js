const backGroundElem = document.querySelector(".color")
const pElem = document.querySelector(".rgb-color")
const btnElm = document.querySelector(".btn-random")

btnElm.addEventListener("click", function () {
  let colors = []
  for (let i = 0; i < 3; i++){
    colors.push(Math.floor(Math.random() * 256))
  }
  let rgbColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`

  backGroundElem.style.backgroundColor = rgbColor
  pElem.innerHTML = rgbColor
})