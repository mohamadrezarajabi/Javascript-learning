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

  projectsTrack.style.transform =
    `translateX(-${projectIndex * (cardWidth + gap)}px)`;
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