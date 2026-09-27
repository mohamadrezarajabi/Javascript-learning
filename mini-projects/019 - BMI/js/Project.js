/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const colors = [
  {
    statusBmi: "کم‌وزنی",
    statusResult: "نیاز به افزایش وزن",
    caption: "شاخص توده بدنی شما پایین تر از محدوده سالم قرار دارد.",
    color: "#4aa3ff",
    bg: "#4aa3ff42",
  },
  {
    statusBmi: "طبیعی",
    statusResult: "وزن ایده آل",
    caption: "شاخص توده بدنی شما در محدوده سالم قرار دارد.",
    color: "var(--success)",
    bg: "#20c99742",
  },
  {
    statusBmi: "اضافه وزن",
    statusResult: "نیاز به کاهش وزن",
    caption: "شاخص توده بدنی شما بالاتر از محدوده سالم قرار دارد",
    color: "var(--warning)",
    bg: "#f5b94242",
  },
  {
    statusBmi: "چاق",
    statusResult: "نیاز به کاهش وزن",
    caption: "شاخص توده بدنی شما در محدوده چاقی قرار دارد.",
    color: "var(--danger)",
    bg: "#ff4d6742",
  },
];

const container = document.querySelector(".container");
const modalContainer = document.querySelector(".modal-bmi");
const btnSubmit = document.querySelector(".btn-card");
const inputHeight = document.querySelector("#height");
const inputWeight = document.querySelector("#weight");

const statusBmi = document.querySelector("#bmi-label");
const bmiValueH1 = document.querySelector("#bmi-value");
const statusResultBmi = document.querySelector(".stauts-result-bmi");
const statusIcon = document.querySelector(".status-icon");
const bmiStatusTitle = document.querySelector("#bmi-status-title");
const statusSpan = document.querySelector("#bmi-status-desc");
const resultWeight = document.querySelector("#result-weight");
const resultHeight = document.querySelector("#result-height");
const rangeBar = document.querySelector(".range-bar-pointer");
const btnRecalculate = document.querySelector(".btn-recalculate");

btnSubmit.addEventListener("click", function () {
  const height = Number(inputHeight.value);
  const weight = Number(inputWeight.value);

  if (
    inputHeight.value.trim() !== "" &&
    inputWeight.value.trim() !== "" &&
    !isNaN(height) &&
    !isNaN(weight) &&
    height > 0 &&
    weight > 0
  ) {
    container.classList.add("hidden");
    modalContainer.classList.remove("hidden");
    calculateBmi();
  }
});
btnRecalculate.addEventListener("click", function () {
    container.classList.remove("hidden");
    modalContainer.classList.add("hidden");
    inputHeight.value = "" 
    inputWeight.value = "" 
});

function calculateBmi() {
  const height = Number(inputHeight.value);
  const weight = Number(inputWeight.value);
  const bmi = weight / (height / 100) ** 2;
  const minBmi = 10;
  const maxBmi = 40;

  const range = Math.min(100,Math.max(0, ((bmi - minBmi) / (maxBmi - minBmi)) * 100));

  function showModalResult(index) {
    const info = colors[index];

    bmiValueH1.textContent = bmi.toFixed(1);
    bmiValueH1.style.color = info.color;
    statusBmi.textContent = info.statusBmi;
    statusBmi.style.color = info.color;
    statusBmi.style.backgroundColor = info.bg;

    statusResultBmi.style.color = info.color;
    statusResultBmi.style.backgroundColor = info.bg;
    statusResultBmi.style.borderColor = info.color;
    statusIcon.innerHTML = `<img src="./images/check.png" width="14" alt="check" class="iconResult" />`;
    statusIcon.style.backgroundColor = info.bg;
    statusSpan.textContent = info.caption
    bmiStatusTitle.textContent = `وضعیت: ${info.statusResult}`;
    resultHeight.textContent = height;
    resultWeight.textContent = weight;
    rangeBar.style.left = `${range}%`;
  }

  if (bmi < 18.5) {
    showModalResult(0);
  } else if (bmi < 25) {
    showModalResult(1);
  } else if (bmi < 30) {
    showModalResult(2);
  } else {
    showModalResult(3);
    statusIcon.innerHTML = `<img src="./images/shield-alert.png" width="14" alt="check" class="iconResult" />`;
  }
}