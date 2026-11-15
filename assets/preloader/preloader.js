/**
 * Shared MR Preloader
 * Injects the overlay immediately; no fetch() request is needed for its HTML.
 */
(() => {
  "use strict";

  const currentScript = document.currentScript;
  if (!currentScript) return;

  const assetsUrl = new URL(".", currentScript.src);
  const cssUrl = new URL("preloader.css", assetsUrl);
  const logoUrl = new URL("../images/Logo.webp", assetsUrl);

  if (document.getElementById("preloader")) return;

  // Critical styles prevent a flash while the external stylesheet downloads.
  const preloader = document.createElement("div");
  preloader.className = "preloader";
  preloader.id = "preloader";
  preloader.setAttribute("role", "status");
  preloader.setAttribute("aria-live", "polite");
  Object.assign(preloader.style, {
    position: "fixed",
    inset: "0",
    zIndex: "99999",
    display: "grid",
    placeItems: "center",
    background: "rgba(16, 23, 32, 0.42)",
    backdropFilter: "blur(8px)",
    webkitBackdropFilter: "blur(8px)",
  });

  const hiddenText = document.createElement("span");
  hiddenText.className = "visually-hidden";
  hiddenText.textContent = "Loading";
  preloader.appendChild(hiddenText);

  const logo = document.createElement("div");
  logo.className = "preloader__logo";
  Object.assign(logo.style, {
    display: "grid",
    width: "min(clamp(180px, 26vw, 340px), 60vh)"
  });

  const layers = ["m", "r", "shine"];
  const images = layers.map((layer) => {
    const image = document.createElement("img");
    image.className = "preloader__layer preloader__layer--" + layer;
    image.src = logoUrl.href;
    image.alt = "";
    image.width = 1536;
    image.height = 1024;
    image.decoding = "async";
    image.loading = "eager";
    image.fetchPriority = "high";
    logo.appendChild(image);
    return image;
  });

  preloader.append(logo);
  document.documentElement.appendChild(preloader);
  document.documentElement.style.overflow = "hidden";

  // Ask the browser for the logo as early as possible.
  const logoPreload = document.createElement("link");
  logoPreload.rel = "preload";
  logoPreload.as = "image";
  logoPreload.href = logoUrl.href;
  logoPreload.type = "image/webp";
  document.head.appendChild(logoPreload);

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = cssUrl.href;
  document.head.appendChild(stylesheet);

  const minimumVisibleMs = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches ? 350 : 1600;
  const maximumWaitMs = 10000;
  const fadeFallbackMs = 1000;

  let pageLoaded = document.readyState === "complete";
  let assetsReady = false;
  let startedAt = null;
  let hidden = false;

  const hidePreloader = () => {
    if (hidden) return;
    hidden = true;
    preloader.classList.add("is-hidden");
    preloader.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";

    const remove = () => preloader.remove();
    preloader.addEventListener("transitionend", (event) => {
      if (event.target === preloader && event.propertyName === "opacity") {
        remove();
      }
    }, { once: true });
    window.setTimeout(remove, fadeFallbackMs);
  };

  const tryToHide = () => {
    if (!pageLoaded || !assetsReady || startedAt === null) return;
    const elapsed = performance.now() - startedAt;
    window.setTimeout(
      hidePreloader,
      Math.max(0, minimumVisibleMs - elapsed)
    );
  };

  const startAnimation = () => {
    if (assetsReady) return;
    assetsReady = true;
    startedAt = performance.now();
    preloader.classList.add("is-ready");
    tryToHide();
  };

  const imagePromises = images.map((image) => new Promise((resolve) => {
    if (image.complete && image.naturalWidth > 0) {
      image.decode().catch(() => {}).then(resolve);
      return;
    }
    image.addEventListener("load", () => {
      image.decode().catch(() => {}).then(resolve);
    }, { once: true });
    image.addEventListener("error", () => {
      console.error("Preloader logo failed to load:", logoUrl.href);
      resolve();
    }, { once: true });
  }));

  let cssReady = false;
  const tryStart = () => {
    if (cssReady && images.every((image) => image.complete && image.naturalWidth > 0)) {
      startAnimation();
    } else if (cssReady && images.some((image) => image.complete && image.naturalWidth === 0)) {
      startAnimation();
    }
  };

  stylesheet.addEventListener("load", () => {
    cssReady = true;
    tryStart();
  }, { once: true });
  stylesheet.addEventListener("error", () => {
    cssReady = true;
    console.error("Preloader stylesheet failed to load:", cssUrl.href);
    tryStart();
  }, { once: true });

  Promise.all(imagePromises).then(tryStart);

  if (!pageLoaded) {
    window.addEventListener("load", () => {
      pageLoaded = true;
      tryToHide();
    }, { once: true });
  }

  window.setTimeout(() => {
    if (!assetsReady) {
      console.error("Preloader timed out while waiting for its assets.");
      startAnimation();
    }
    pageLoaded = true;
    hidePreloader();
  }, maximumWaitMs);
})();
