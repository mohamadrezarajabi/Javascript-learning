/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

// =========================
// Featured Projects Slider
// =========================

const projectsTrack = document.querySelector(".projects-track");
const prevProjectBtn = document.querySelector(".project-prev");
const nextProjectBtn = document.querySelector(".project-next");

let projectIndex = 0;

function getVisibleProjects() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 4;
}

function updateProjects() {
  const cards = document.querySelectorAll(".project-card");
  const visible = getVisibleProjects();

  const maxIndex = Math.max(cards.length - visible, 0);

  projectIndex = Math.min(projectIndex, maxIndex);
  projectIndex = Math.max(projectIndex, 0);

  const cardWidth = cards[0].offsetWidth;
  const gap = 20;

  projectsTrack.style.transform = `translateX(-${projectIndex * (cardWidth + gap)}px)`;
}

nextProjectBtn.addEventListener("click", () => {
  projectIndex += getVisibleProjects();
  updateProjects();
});

prevProjectBtn.addEventListener("click", () => {
  projectIndex -= getVisibleProjects();
  updateProjects();
});

window.addEventListener("resize", updateProjects);

updateProjects();

// ----------//

const btnContact = document.querySelector(".btn-right");
const btnViewPM = document.querySelector(".btn-left");
const darkMode = document.querySelector(".dark-mode");
const statusMode = document.querySelector(".status-mode");
const statusName = document.querySelector(".status-name");

function render(){
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light");
  }
  if (localStorage.getItem("theme") === "light") {
    statusMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17202a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun preview-icon"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    statusName.textContent = "light";
    document.body.dataset.theme = "light";
    localStorage.setItem("theme","light")
  } else if (localStorage.getItem("theme") === "dark") {
    document.body.dataset.theme = "dark";
    statusMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#f1f5f9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon preview-icon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`;
    statusName.textContent = "dark";
    localStorage.setItem("theme", "dark");
  }
}
render()

darkMode.addEventListener("click", function () {
  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  render();
});
