/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const questions = [
  {
    id: 1,
    question:
      "کدام کلمه برای تعریف متغیری که مقدار آن قابل تغییر است استفاده می‌شود؟",
    options: ["const", "let", "static", "final"],
    answer: "let",
  },
  {
    id: 2,
    question: "خروجی typeof null چیست؟",
    options: ["null", "undefined", "object", "boolean"],
    answer: "object",
  },
  {
    id: 3,
    question: "کدام متد یک عنصر را به انتهای آرایه اضافه می‌کند؟",
    options: ["shift()", "unshift()", "pop()", "push()"],
    answer: "push()",
  },
  {
    id: 4,
    question: "کدام عملگر برای مقایسه مقدار و نوع داده استفاده می‌شود؟",
    options: ["==", "=", "===", "!="],
    answer: "===",
  },
  {
    id: 5,
    question: "خروجی عبارت 2 + '3' چیست؟",
    options: ["5", "'32'", "32", "NaN"],
    answer: "'32'",
  },
  {
    id: 6,
    question:
      "کدام متد برای تبدیل رشته JSON به یک شیء جاوااسکریپت استفاده می‌شود؟",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    answer: "JSON.parse()",
  },
  {
    id: 7,
    question: "کدام حلقه برای پیمایش عناصر یک آرایه مناسب است؟",
    options: ["forEach()", "addEach()", "repeatEach()", "loopArray()"],
    answer: "forEach()",
  },
  {
    id: 8,
    question:
      "کدام متد یک آرایه جدید بر اساس نتیجه اجرای تابع روی عناصر آرایه می‌سازد؟",
    options: ["filter()", "find()", "map()", "forEach()"],
    answer: "map()",
  },
  {
    id: 9,
    question:
      "مقدار اولیه متغیری که با let تعریف شده اما مقداری به آن اختصاص داده نشده چیست؟",
    options: ["null", "0", "undefined", "false"],
    answer: "undefined",
  },
  {
    id: 10,
    question:
      "کدام متد برای انتخاب یک عنصر HTML بر اساس شناسه آن استفاده می‌شود؟",
    options: [
      "document.querySelectorAll()",
      "document.getElementById()",
      "document.getElementsByClassName()",
      "document.createElement()",
    ],
    answer: "document.getElementById()",
  },
];

let score = 0;
let currentQuizIndex = 0;

const root = document.querySelector(":root")
const modalStartOverlay = document.querySelector(".modalStartOverlay");
const btnModalStart = document.querySelector(".btnModalStart");
const screen = document.querySelector(".screen");
const btnNext = document.querySelector(".btnNext");
const modalResultOverlay = document.querySelector(".modalResultOverlay");
const questionBadge = document.querySelector(".questionBadge span");
const questionText = document.querySelector(".questionText");
const optionText = document.querySelectorAll(".optionText");
const progressBar = document.querySelector(".progress-bar");
const questionCount = document.querySelector(".questionCount span");
const options = document.querySelectorAll(".option input");
const scoreValue = document.querySelector(".scoreValue");
const statCorrect = document.querySelector(".statCorrect");
const statWrong = document.querySelector(".statWrong");
const correct = document.querySelector(".correct");
const scoreRing = document.querySelector(".scoreRing");
const btnRetry = document.querySelector(".btnRetry");

function updateProgress() {
  const progress = ((currentQuizIndex + 1) / questions.length) * 100;

  progressBar.style.width = `${progress}%`;
}

btnModalStart.addEventListener("click", function () {
  modalStartOverlay.classList.add("hidden");
  screen.classList.remove("hidden");
  showQuiz();
  updateProgress();
});

function showQuiz() {
  questionBadge.textContent = currentQuizIndex + 1;
  questionCount.textContent = currentQuizIndex + 1;
  questionText.textContent = questions[currentQuizIndex].question;
  for (let i = 0; i < optionText.length; i++) {
    optionText[i].textContent = questions[currentQuizIndex].options[i];
  }
}

function resetOptions() {
  options.forEach(function (option) {
    option.checked = false;
  });
}

function scoring() {
  const selectOption = Array.from(options).find(function (option) {
    return option.checked;
  });
  const value = selectOption.value;

  if (
    questions[currentQuizIndex].options[value] ===
    questions[currentQuizIndex].answer
  ) {
    score++;
  }
}

btnNext.addEventListener("click", function () {
  const isSelect = Array.from(options).some(function (option) {
    return option.checked;
  });

  if (!isSelect) {
    return;
  }

  scoring();
  resetOptions()

  if (currentQuizIndex === questions.length - 1) {
    const percent = (score / questions.length) * 100;
    scoreValue.textContent = `${percent}%`;
    statCorrect.textContent = score;
    statWrong.textContent = questions.length - score;
    correct.textContent = score;
    root.style.setProperty("--percent", `${percent}%`);

    if (percent < 40) {
      scoreRing.style.cssText = `background: conic-gradient(
      var(--color-error) var(--percent),
      var(--color-border) 0
      );`;
    } else if (percent <= 70) {
      scoreRing.style.cssText = `background: conic-gradient(
      var(--color-primary) var(--percent),
      var(--color-border) 0
      );`;
    } else {
      scoreRing.style.cssText = `background: conic-gradient(
      var(--color-success) var(--percent),
      var(--color-border) 0
      );`;
    }

    modalResultOverlay.classList.remove("hidden");
    return;
  }

  currentQuizIndex++;
  showQuiz();
  updateProgress();

  if (currentQuizIndex === questions.length - 1) {
    btnNext.style.width = "100%";
    btnNext.textContent = "Result";
  }
});

btnRetry.addEventListener('click', function () {
  location.reload();
})