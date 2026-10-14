/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const range = document.querySelector("#brightness");

function updateSlider(event) {
  const min = +range.min;
  const max = +range.max;
  const value = +range.value;

  const progress = ((value - min)/(max - min)) * 100;

  range.style.setProperty("--progress", `${progress}%`);
}

range.addEventListener("input", updateSlider);

updateSlider()

function setbrightness(event){
  const brightness = event.target.value

  document.documentElement.style.cssText = `filter: brightness(${brightness/20})`
}

range.addEventListener("change", setbrightness);