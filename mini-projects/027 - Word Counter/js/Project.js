/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const inputElem = document.querySelector("#text-input");
const clearBtn = document.querySelector(".clear-button");
const wordCount = document.querySelector("#word-count");
const characterCount = document.querySelector("#character-count");
const sentenceCount = document.querySelector("#sentence-count");
const paragraphCount = document.querySelector("#paragraph-count");

inputElem.addEventListener("keyup", function (event) {
  const value = event.target.value;

  characterCount.textContent = value
    .trim()
    .split("")
    .filter(function (char) {
      return char !== " ";
    }).length;

  wordCount.textContent = value.split(" ").length;
  sentenceCount.textContent = value.split(".").length - 1

  paragraphCount.textContent = value.split(/\r?\n/).filter(function (line) {
    return line.trim() !== "";
  }).length;
});

clearBtn.addEventListener("click" ,function () {
  inputElem.value = ""
  wordCount.textContent = 0
  characterCount.textContent = 0
  paragraphCount.textContent = 0
  sentenceCount.textContent = 0
})