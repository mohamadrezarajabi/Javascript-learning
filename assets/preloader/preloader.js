/**
 * Shared MR Preloader
 * Loads the shared HTML and CSS once per page, then waits for page assets.
 */
(() => {
  "use strict";

  const currentScript = document.currentScript;
  if (!currentScript) return;

  const assetsUrl = new URL(".", currentScript.src);
  const htmlUrl = new URL("preloader.html", assetsUrl);
  const cssUrl = new URL("preloader.css", assetsUrl);
  const logoUrl = new URL("../images/Logo.webp", assetsUrl);

  if (document.getElementById("preloader")) return;

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = cssUrl.href;
  document.head.appendChild(stylesheet);

  const logoPreload = document.createElement("link");
  logoPreload.rel = "preload";
  logoPreload.as = "image";
  logoPreload.href = logoUrl.href;
  logoPreload.type = "image/webp";
  document.head.appendChild(logoPreload);

  Promise.all([
    fetch(htmlUrl).then((response) => {
      if (!response.ok) throw new Error("Preloader HTML could not be loaded.");
      return response.text();
    }),
    new Promise((resolve) => {
      if (stylesheet.sheet) {
        resolve();
      } else {
        stylesheet.addEventListener("load", resolve, { once: true });
        stylesheet.addEventListener("error", resolve, { once: true });
      }
    }),
  ])
    .then(([html]) => {
      const template = document.createElement("template");
      template.innerHTML = html.trim();

      const preloader = template.content.querySelector(".preloader");
      if (!preloader || !document.body) return;

      preloader.querySelectorAll("img").forEach((image) => {
        image.src = logoUrl.href;
      });

      document.body.prepend(preloader);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const minimumVisibleMs = prefersReducedMotion ? 400 : 1900;
      const maximumWaitMs = 10000;
      const fadeFallbackMs = 1200;

      let animationStartedAt = null;
      let pageLoaded = document.readyState === "complete";
      let hidden = false;

      const hidePreloader = () => {
        if (hidden) return;
        hidden = true;

        preloader.classList.add("is-hidden");
        preloader.setAttribute("aria-hidden", "true");

        const remove = () => preloader.remove();
        preloader.addEventListener(
          "transitionend",
          (event) => {
            if (
              event.target === preloader &&
              event.propertyName === "opacity"
            ) {
              remove();
            }
          },
          { once: true },
        );
        window.setTimeout(remove, fadeFallbackMs);
      };

      const tryToHide = () => {
        if (!pageLoaded || animationStartedAt === null) return;

        const elapsed = performance.now() - animationStartedAt;
        window.setTimeout(
          hidePreloader,
          Math.max(0, minimumVisibleMs - elapsed),
        );
      };

      const startAnimation = () => {
        if (animationStartedAt !== null) return;
        animationStartedAt = performance.now();
        preloader.classList.add("is-ready");
        tryToHide();
      };

      const images = Array.from(preloader.querySelectorAll("img"));
      Promise.all(images.map((image) => image.decode().catch(() => {}))).then(
        startAnimation,
      );

      if (!pageLoaded) {
        window.addEventListener(
          "load",
          () => {
            pageLoaded = true;
            tryToHide();
          },
          { once: true },
        );
      }

      window.setTimeout(hidePreloader, maximumWaitMs);
    })
    .catch((error) => {
      console.error("Preloader error:", error);
    });
})();
