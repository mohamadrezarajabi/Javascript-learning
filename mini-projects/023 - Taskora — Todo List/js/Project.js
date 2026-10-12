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
const selectFilterAll = document.querySelectorAll(".select-filter");

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

const viewModal = document.querySelector("#view-modal");

const viewTaskTitle = document.querySelector(".view-task-title");
const viewTaskStatus = document.querySelector(".view-task-status");
const viewTaskDescription = document.querySelector(".view-task-description");
const viewTaskDate = document.querySelector(".view-task-date");
const viewTaskTime = document.querySelector(".view-task-time");
const viewTaskFavorite = document.querySelector(".view-task-favorite");
const viewEditTaskBtn = document.querySelector(".view-edit-task");

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
const modaltitle = document.querySelector("#create-modal-title");

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

let editingTaskIndex = null;
let deletingTaskIndex = null;
let viewingTaskIndex = null;
let currentFilter = "all";

function sortTasks(todo) {
  const sortType = sortingSelect.value;
  const sortedTasks = [...todo];

  if (sortType === "newest") {
    sortedTasks.sort(function (a, b) {
      const dateA = a.datetime + " " + a.time;
      const dateB = b.datetime + " " + b.time;

      return dateB > dateA ? 1 : dateB < dateA ? -1 : 0;
    });
  } else if (sortType === "oldest") {
    sortedTasks.sort(function (a, b) {
      const dateA = a.datetime + " " + a.time;
      const dateB = b.datetime + " " + b.time;

      return dateA > dateB ? 1 : dateA < dateB ? -1 : 0;
    });
  } else if (sortType === "title-asc" || sortType === "title-desc") {
    sortedTasks.sort(function (a, b) {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (sortType === "title-asc") {
        return titleA > titleB ? 1 : titleA < titleB ? -1 : 0;
      }

      return titleA < titleB ? 1 : titleA > titleB ? -1 : 0;
    });
  }

  return sortedTasks;
}

function reload(todo = tasks) {
  todo = sortTasks(todo);

  todoList.innerHTML = "";

  const imgAddTask = document.querySelector(".todo-img");

  if (tasks.length === 0) {
    imgAddTask.style.display = "flex";
  } else {
    imgAddTask.style.display = "none";
  }

  const STAR_OUTLINE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`;

  const STAR_FILLED = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`;

  todo.forEach(function (task) {
    todoList.insertAdjacentHTML(
      "beforeend",
      `<li class="todo-item ${task.statusCheckbox ? "todo-item--completed" : ""}" data-index="${tasks.indexOf(task)}">
          <div class="todo-actions">
            <label class="todo-checkbox">
              <input type="checkbox" aria-label="تکمیل تسک" ${task.statusCheckbox ? "checked" : ""} />
              <span class="todo-checkbox__icon"></span>
            </label>
    
            <button
              type="button"
              class="todo-favorite ${task.statusCheckFav ? "active" : ""}"
              aria-label="افزودن به علاقه‌مندی‌ها"
            >
              ${task.statusCheckFav ? STAR_FILLED : STAR_OUTLINE}
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
  const todoEditItem = document.querySelectorAll(".todo-edit");
  const todoFavoriteItem = document.querySelectorAll(".todo-favorite");
  const todoCheckbox = document.querySelectorAll(".todo-checkbox input");
  const todoContent = document.querySelectorAll(".todo-content");

  todoDeleteItem.forEach(function (trash) {
    trash.addEventListener("click", function () {
      deletingTaskIndex = Number(trash.closest(".todo-item").dataset.index);

      deleteModal.ariaHidden = "false";
    });
  });

  todoEditItem.forEach(function (todo, index) {
    todo.addEventListener("click", function () {
      editingTaskIndex = Number(todo.closest(".todo-item").dataset.index);

      const task = tasks[editingTaskIndex];

      if (!task) return;
      modaltitle.textContent = "ویرایش تسک";
      createModal.ariaHidden = "false";

      createTaskTitleInput.value = task.title;
      createTaskDescriptionInput.value = task.description;
      createTaskDateInput.value = task.datetime;
      createTaskTimeInput.value = task.time;
      createTaskFavoriteInput.checked = task.statusCheckFav;
    });
  });

  todoFavoriteItem.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      todo[index].statusCheckFav = !todo[index].statusCheckFav;

      localStorage.setItem("task", JSON.stringify(tasks));
      reloadFiltered();
    });
  });

  todoCheckbox.forEach(function (check, index) {
    check.addEventListener("change", function (event) {
      todo[index].statusCheckbox = event.target.checked;

      localStorage.setItem("task", JSON.stringify(tasks));
      reloadFiltered();
    });
  });

  todoContent.forEach(function (content) {
    content.addEventListener("click", function () {
      const taskItem = content.closest(".todo-item");
      viewingTaskIndex = Number(taskItem.dataset.index);

      const task = tasks[viewingTaskIndex];

      if (!task) return;

      viewTaskTitle.textContent = task.title;
      viewTaskDescription.textContent =
        task.description || "توضیحاتی برای این تسک ثبت نشده است.";

      viewTaskStatus.textContent = task.statusCheckbox
        ? "تکمیل شده"
        : "تکمیل نشده";

      viewTaskDate.textContent = task.datetime || "ثبت نشده";
      viewTaskTime.textContent = task.time || "ثبت نشده";

      viewTaskFavorite.textContent = task.statusCheckFav ? "بله" : "خیر";

      viewModal.ariaHidden = false;
    });
  });
}
reload();

viewEditTaskBtn.addEventListener("click", function () {
  if (viewingTaskIndex === null) return;

  const task = tasks[viewingTaskIndex];

  if (!task) return;

  editingTaskIndex = viewingTaskIndex;

  createTaskForm.reset();

  createTaskTitleInput.value = task.title;
  createTaskDescriptionInput.value = task.description || "";
  createTaskDateInput.value = task.datetime || "";
  createTaskTimeInput.value = task.time || "";
  createTaskFavoriteInput.checked = task.statusCheckFav;

  modaltitle.textContent = "ویرایش تسک";

  viewModal.ariaHidden = true;
  createModal.ariaHidden = false;
});

confirmDeleteBtn.addEventListener("click", function () {
  if (deletingTaskIndex === null) return;

  tasks.splice(deletingTaskIndex, 1);

  localStorage.setItem("task", JSON.stringify(tasks));

  deletingTaskIndex = null;
  deleteModal.ariaHidden = "true";

  reload();
});

addTaskBtn.addEventListener("click", function () {
  editingTaskIndex = null;
  createModal.ariaHidden = "false";
  createTaskForm.reset();
  modaltitle.textContent = "ایجاد تسک جدید";
  setDefaultDateTime();
});

modalCloseBtns.forEach(function (close) {
  close.addEventListener("click", function () {
    createModal.ariaHidden = "true";
    deleteModal.ariaHidden = "true";
    viewModal.ariaHidden = "true";
  });
});
modalCancelBtns.forEach(function (close) {
  close.addEventListener("click", function () {
    createModal.ariaHidden = "true";
    deleteModal.ariaHidden = "true";
    viewModal.ariaHidden = "true";
  });
});
submitModal.addEventListener("click", function () {
  const title = createTaskTitleInput.value.trim();
  const textera = createTaskDescriptionInput.value.trim();
  if (title !== "") {
    const taskData = {
      title: title,
      description: textera,
      datetime: createTaskDateInput.value,
      time: createTaskTimeInput.value,
      statusCheckFav: createTaskFavoriteInput.checked,
      statusCheckbox: false,
    };

    if (editingTaskIndex !== null) {
      taskData.statusCheckbox = tasks[editingTaskIndex].statusCheckbox;
      tasks[editingTaskIndex] = taskData;
    } else {
      tasks.push(taskData);
    }

    localStorage.setItem("task", JSON.stringify(tasks));

    createModal.ariaHidden = "true";
    createTaskForm.reset();
    reload();
  }
});

function select(selecTodo) {
  selectFilterAll.forEach(function (todo) {
    todo.classList.remove("select");
  });
  selecTodo.classList.add("select");
}
function counting() {
  function complete() {
    return tasks.filter(function (todo) {
      return todo.statusCheckbox === true;
    });
  }
  function uncomplete() {
    return tasks.filter(function (todo) {
      return todo.statusCheckbox === false;
    });
  }
  function favorite() {
    return tasks.filter(function (todo) {
      return todo.statusCheckFav == true;
    });
  }

  return { complete, uncomplete, favorite };
}

function search() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const searchFilter = tasks.filter(function (task) {
    return (
      task.title.includes(searchValue) || task.description.includes(searchValue)
    );
  });

  reload(searchFilter);
}

function reloadFiltered() {
  if (currentFilter === "all") {
    reload();
  } else if (currentFilter === "completed") {
    reload(counting().complete());
  } else if (currentFilter === "uncompleted") {
    reload(counting().uncomplete());
  } else if (currentFilter === "favorites") {
    reload(counting().favorite());
  }
  count();
}

function count() {
  allCountSpan.textContent = tasks.length;
  completedSpan.textContent = counting().complete().length;
  uncompletedSpan.textContent = counting().uncomplete().length;
}
count();

selectFilterAll.forEach(function (todo) {
  todo.addEventListener("click", function (event) {
    if (event.target.closest(".select-all")) {
      currentFilter = "all";
      select(allFilterBtn);
    } else if (event.target.closest(".select-completed")) {
      currentFilter = "completed";
      select(completedFilterBtn);
    } else if (event.target.closest(".select-uncompleted")) {
      currentFilter = "uncompleted";
      select(uncompletedFilterBtn);
    } else if (event.target.closest(".favorites")) {
      currentFilter = "favorites";
      select(favoritesFilterBtn);
    }

    reloadFiltered();
  });
});

searchInput.addEventListener("input", search);
sortingSelect.addEventListener("change", reloadFiltered);