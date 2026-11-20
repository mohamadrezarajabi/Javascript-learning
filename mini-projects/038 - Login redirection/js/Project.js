const progressFill = document.querySelector(".progress-bar");

window.addEventListener("scroll", function () {
  const scrollY = document.documentElement.scrollTop;

  const totalScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  progressFill.style.width = `${(scrollY / totalScroll) * 100}%`;
});
