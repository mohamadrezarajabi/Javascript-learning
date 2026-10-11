/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

// darkMode btn

const themeSwitch = document.querySelector(".theme-switch");
const rootElement = document.documentElement;
const leafImg = document.querySelector(".header-left__img img");

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}

const savedTheme = localStorage.getItem("theme");
rootElement.dataset.theme = savedTheme;
leafImg.style.filter =
  savedTheme === "dark" ? "brightness(2)" : "brightness(1)";

themeSwitch.addEventListener("click", () => {
  const isDark = rootElement.dataset.theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  rootElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);

  leafImg.style.filter =
    nextTheme === "dark" ? "brightness(2)" : "brightness(1)";
});

/* ------------------------ */

let tasks = JSON.parse(localStorage.getItem("task")) || [];

const allCountP = document.querySelector(".all-count .main-count_p");
const completedP = document.querySelector(".completed .main-count_p");
const uncompletedP = document.querySelector(".uncompleted .main-count_p");

const allCountSpan = document.querySelector(".all-count .main-count_span");
const completedSpan = document.querySelector(".completed .main-count_span");
const uncompletedSpan = document.querySelector(".uncompleted .main-count_span");

const addTaskBtn = document.querySelector(".btn-add_task");
const searchInput = document.querySelector("#search-task");
const sortingSelect = document.querySelector("#sorting");

const allFilterBtn = document.querySelector(".select-all");
const completedFilterBtn = document.querySelector(".select-completed");
const uncompletedFilterBtn = document.querySelector(".select-uncompleted");
const favoritesFilterBtn = document.querySelector(".favorites");

const todoList = document.querySelector(".todo-list");

const createModal = document.querySelector("#create-modal");
const createTaskForm = document.querySelector(".task-create-form");
const createTaskTitleInput = document.querySelector("#create-task-title");
const createTaskDescriptionInput = document.querySelector(
  "#create-task-description",
);
const createTaskDateInput = document.querySelector("#create-task-date");
const createTaskTimeInput = document.querySelector("#create-task-time");
const createTaskFavoriteInput = document.querySelector("#create-task-favorite");

const deleteModal = document.querySelector("#delete-modal");
const confirmDeleteBtn = document.querySelector(".confirm-delete");

const editModal = document.querySelector("#edit-modal");
const editTaskForm = document.querySelector(".task-edit-form");
const submitModal = document.querySelector(".modal-submit");
const editTaskTitleInput = document.querySelector("#edit-task-title");
const editTaskDescriptionInput = document.querySelector(
  "#edit-task-description",
);
const editTaskDateInput = document.querySelector("#edit-task-date");
const editTaskTimeInput = document.querySelector("#edit-task-time");
const editTaskFavoriteInput = document.querySelector("#edit-task-favorite");

const modalCloseBtns = document.querySelectorAll(".modal-close");
const modalCancelBtns = document.querySelectorAll(".modal-cancel");

function setDefaultDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  createTaskDateInput.value = `${year}-${month}-${day}`;
  createTaskTimeInput.value = `${hours}:${minutes}`;
}
function reload() {
  todoList.innerHTML = "";

  tasks.forEach(function (task) {
    todoList.insertAdjacentHTML(
      "beforeend",
      `<li class="todo-item">
        <div class="todo-actions">
          <label class="todo-checkbox">
            <input type="checkbox" aria-label="تکمیل تسک" />
            <span class="todo-checkbox__icon"></span>
          </label>
  
          <button
            type="button"
            class="todo-favorite"
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
              <path
                fill="rgb(255, 255, 255)"
                d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"
              />
            </svg>
          </button>
        </div>
  
        <div class="todo-meta">
          <time class="todo-date">${task.datetime}</time>
          <time class="todo-time">${task.time}</time>
        </div>
  
        <div class="todo-content">
          <h3 class="todo-title">${task.title}</h3>
          <p class="todo-description">${task.description}</p>
        </div>
  
        <button type="button" class="todo-edit" aria-label="ویرایش تسک">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-pencil preview-icon"
          >
            <path
              d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
            />
            <path d="m15 5 4 4" />
          </svg>
        </button>
  
        <button type="button" class="todo-delete" aria-label="حذف تسک">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-trash preview-icon"
          >
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M3 6h18" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      </li>`,
    );
  });

  const todoDeleteItem = document.querySelectorAll(".todo-delete");

  todoDeleteItem.forEach(function (trash, index) {
    trash.addEventListener("click", function (event) {
      deleteModal.ariaHidden = "false";
      confirmDeleteBtn.addEventListener("click", function () {
        tasks.splice(index, 1);
        localStorage.setItem("task", JSON.stringify(tasks));

        deleteModal.ariaHidden = "true";

        reload();
      });
    });
  });
}
reload();

addTaskBtn.addEventListener("click", function () {
  createModal.ariaHidden = "false";
  setDefaultDateTime();
});

modalCloseBtns.forEach(function (close) {
  close.addEventListener("click", function () {
    createModal.ariaHidden = "true";
    deleteModal.ariaHidden = "true";
  });
});
modalCancelBtns.forEach(function (close) {
  close.addEventListener("click", function () {
    createModal.ariaHidden = "true";
    deleteModal.ariaHidden = "true";
  });
});
submitModal.addEventListener("click", function () {
  const title = createTaskTitleInput.value.trim();
  const textera = createTaskDescriptionInput.value.trim();
  if (title !== "") {
    tasks.push({
      title: title,
      description: textera,
      datetime: createTaskDateInput.value,
      time: createTaskTimeInput.value,
      statusCheck: createTaskFavoriteInput.checked,
    });
    localStorage.setItem("task", JSON.stringify(tasks));
    createModal.ariaHidden = "true";
    createTaskForm.reset();
    reload();
  }
});
