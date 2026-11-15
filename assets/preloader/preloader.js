/**
 * Shared MR Preloader
 * The markup and stylesheet are loaded by the HTML parser.
 * This file only coordinates the logo animation and page-load lifecycle.
 */
(() => {
  "use strict";

  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  const logoImages = Array.from(preloader.querySelectorAll(".preloader__layer"));
  const minimumVisibleMs = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches ? 300 : 1500;
  const maximumWaitMs = 12000;

  let pageLoaded = document.readyState === "complete";
  let animationStartedAt = null;
  let hidden = false;
  let hideTimer = null;

  const hidePreloader = () => {
    if (hidden) return;
    hidden = true;
    window.clearTimeout(hideTimer);
    preloader.classList.add("is-hidden");
    preloader.setAttribute("aria-hidden", "true");
  };

  const tryToHide = () => {
    if (!pageLoaded || animationStartedAt === null || hidden) return;

    const elapsed = performance.now() - animationStartedAt;
    window.setTimeout(
      hidePreloader,
      Math.max(0, minimumVisibleMs - elapsed)
    );
  };

  const startAnimation = () => {
    if (animationStartedAt !== null || hidden) return;

    animationStartedAt = performance.now();
    preloader.classList.add("is-ready");
    tryToHide();
  };

  const waitForImage = (image) => {
    if (image.complete) {
      return image.naturalWidth > 0
        ? image.decode().catch(() => {})
        : Promise.reject(new Error("Preloader logo failed to load."));
    }

    return new Promise((resolve, reject) => {
      image.addEventListener("load", () => {
        image.decode().then(resolve).catch(resolve);
      }, { once: true });

      image.addEventListener("error", () => {
        reject(new Error("Preloader logo failed to load."));
      }, { once: true });
    });
  };

  Promise.all(logoImages.map(waitForImage))
    .then(startAnimation)
    .catch((error) => {
      console.error("[MR Preloader]", error);
      // Never leave a blank overlay covering the page.
      preloader.classList.add("is-logo-error");
      startAnimation();
    });

  if (!pageLoaded) {
    window.addEventListener("load", () => {
      pageLoaded = true;
      tryToHide();
    }, { once: true });
  } else {
    tryToHide();
  }

  hideTimer = window.setTimeout(() => {
    console.warn("[MR Preloader] Maximum wait time reached.");
    hidePreloader();
  }, maximumWaitMs);
})();
