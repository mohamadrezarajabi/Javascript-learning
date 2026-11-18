/*
 * Location API & History API
 *
 * Location API:
 * - Gets information about the current URL.
 * - Navigates to another URL.
 *
 * History API:
 * - Manages browser history entries.
 * - Changes the URL without reloading the page.
 *
 * SPA:
 * A Single Page Application updates page content
 * without loading a completely new HTML document.
 */

//* Exc 1 -> Select HTML Elements

const pageContent = document.querySelector("#page-content");

const steps = document.querySelector("#steps");
const codeResult = document.querySelector("#code-result");
const result = document.querySelector("#result");

const queryDisplay = document.querySelector("#query-display");

const backButton = document.querySelector("#back-btn");
const forwardButton = document.querySelector("#forward-btn");
const replaceButton = document.querySelector("#replace-btn");

const addQueryButton = document.querySelector("#add-query");
const deleteQueryButton = document.querySelector("#delete-query");

const navigationLinks = document.querySelectorAll("[data-link]");

//* Exc 2 -> Create Pages

const pages = {
  "/": {
    title: "خانه",
    description: "به صفحه اصلی وب‌سایت خوش آمدید.",
  },

  "/about": {
    title: "درباره ما",
    description: "این صفحه درباره وب‌سایت و اهداف آن است.",
  },

  "/contact": {
    title: "تماس با ما",
    description: "از این قسمت می‌توانید با ما در ارتباط باشید.",
  },
};

//* Exc 3 -> Display Page

function renderPage(path) {
  // Get the page information based on the current path.
  const page = pages[path];

  // Check whether the requested page exists.
  if (page) {
    // Display the selected page content.
    pageContent.innerHTML = `
      <h2>${page.title}</h2>
      <p>${page.description}</p>
      <p>آدرس فعلی: ${location.pathname}</p>
    `;
  } else {
    // Display the 404 page for unknown paths.
    pageContent.innerHTML = `
      <h2>صفحه پیدا نشد!</h2>
      <p>مسیر موردنظر در این وب‌سایت وجود ندارد.</p>
      <p>آدرس: ${location.pathname}</p>
    `;
  }

  // Update the active navigation link.
  navigationLinks.forEach(function (link) {
    // Check whether the link matches the current path.
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Update the query string information.
  updateQueryDisplay();
}

//* Exc 4 -> Navigate Between Pages

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Prevent the browser from loading a new page.
    event.preventDefault();

    // Get the destination URL.
    const path = link.getAttribute("href");

    // Add a new entry to browser history.
    history.pushState({ page: path }, "", path);

    // Display the selected page manually.
    renderPage(path);

    // Update the execution information.
    steps.innerHTML = `
      1. کلیک کاربر روی لینک دریافت شد.<br>
      2. رفتار پیش‌فرض لینک متوقف شد.<br>
      3. یک رکورد جدید در History ساخته شد.<br>
      4. محتوای صفحه بدون Reload تغییر کرد.
    `;

    codeResult.textContent = `history.pushState({ page: "${path}" }, "", "${path}");`;

    result.textContent = `صفحه ${path} نمایش داده شد.`;
  });
});

//* Exc 5 -> Handle Back and Forward

window.addEventListener("popstate", function (event) {
  // Get the current path from the URL.
  const path = location.pathname;

  // Display the correct page after Back or Forward.
  renderPage(path);

  // Get the state stored in the activated history entry.
  const currentState = event.state;

  steps.innerHTML = `
    1. کاربر از Back یا Forward استفاده کرد.<br>
    2. مرورگر به یک رکورد دیگر در History رفت.<br>
    3. رویداد popstate اجرا شد.<br>
    4. صفحه متناسب با URL نمایش داده شد.
  `;

  codeResult.textContent = `window.addEventListener("popstate", callback);`;

  result.textContent = `Current URL: ${path} | State: ${JSON.stringify(currentState)}`;
});

//* Exc 6 -> Query String

function updateQueryDisplay() {
  // Get query parameters from the current URL.
  const params = new URLSearchParams(location.search);

  // Convert query parameters into an object.
  const data = {};

  params.forEach(function (value, key) {
    data[key] = value;
  });

  // Display query parameters on the page.
  queryDisplay.textContent = JSON.stringify(data);
}

//* Exc 7 -> Add Query Parameter

addQueryButton.addEventListener("click", function () {
  // Create URLSearchParams from the current URL.
  const params = new URLSearchParams(location.search);

  // Add or update the demo parameter.
  params.set("lesson", "javascript");

  // Create the new URL.
  const newURL = location.pathname + "?" + params.toString();

  // Update the current history entry without reloading.
  history.pushState({ page: location.pathname }, "", newURL);

  // Refresh the displayed query parameters.
  updateQueryDisplay();

  steps.innerHTML = `
    1. Query String فعلی دریافت شد.<br>
    2. پارامتر lesson اضافه یا به‌روزرسانی شد.<br>
    3. URL جدید ساخته شد.<br>
    4. آدرس بدون Reload تغییر کرد.
  `;

  codeResult.textContent = 'params.set("lesson", "javascript");';

  result.textContent = `URL جدید: ${location.href}`;
});

//* Exc 8 -> Delete Query Parameter

deleteQueryButton.addEventListener("click", function () {
  // Get the current query parameters.
  const params = new URLSearchParams(location.search);

  // Delete the lesson parameter.
  params.delete("lesson");

  // Build the updated URL.
  const query = params.toString();

  const newURL = location.pathname + (query ? `?${query}` : "") + location.hash;

  // Update the current history entry.
  history.pushState({ page: location.pathname }, "", newURL);

  // Update the displayed information.
  updateQueryDisplay();

  steps.innerHTML = `
    1. پارامترهای URL دریافت شدند.<br>
    2. پارامتر lesson حذف شد.<br>
    3. URL جدید ساخته شد.<br>
    4. تاریخچه مرورگر به‌روزرسانی شد.
  `;

  codeResult.textContent = 'params.delete("lesson");';

  result.textContent = `URL جدید: ${location.href}`;
});

//* Exc 9 -> Browser History Buttons

backButton.addEventListener("click", function () {
  // Navigate to the previous history entry.
  history.back();
});

forwardButton.addEventListener("click", function () {
  // Navigate to the next history entry.
  history.forward();
});

replaceButton.addEventListener("click", function () {
  // Replace the current history entry.
  history.replaceState(
    { page: location.pathname, updated: true },
    "",
    location.href,
  );

  steps.innerHTML = `
    1. رکورد فعلی History انتخاب شد.<br>
    2. اطلاعات State آن تغییر کرد.<br>
    3. رکورد جدیدی ساخته نشد.<br>
    4. صفحه Reload نشد.
  `;

  codeResult.textContent =
    'history.replaceState({ updated: true }, "", location.href);';

  result.textContent = "رکورد فعلی History به‌روزرسانی شد.";
});

//* Exc 10 -> Initial Page

// Display the correct page when the website first loads.
renderPage(location.pathname);

// Save the initial page information in the current entry.
history.replaceState({ page: location.pathname }, "", location.href);

/*
 * !NOTE:
 *
 * pushState():
 * Adds a new history entry without reloading the page.
 *
 * replaceState():
 * Updates the current history entry.
 *
 * popstate:
 * Runs when the active history entry changes through
 * browser navigation.
 *
 * URLSearchParams:
 * Reads and modifies query parameters.
 *
 * Important:
 * pushState() does not automatically update the DOM.
 * We must call renderPage() ourselves.
 *
 * Refresh:
 * The server must return the SPA HTML file for routes
 * such as /about and /contact.
 *
 * This example handles route rendering in the frontend,
 * but server-side fallback configuration is also needed.
 */
