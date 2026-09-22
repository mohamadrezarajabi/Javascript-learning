const ulElem = document.querySelector(".todo-list");
const spanAllCount = document.querySelector(
  ".filter-btn--all .filter-btn__count",
);
const spanCompleted = document.querySelector(
  ".filter-btn--completed .filter-btn__count",
);
const spanDelete = document.querySelector(
  ".filter-btn--deleted .filter-btn__count",
);
const navBtnElem = document.querySelector(".main-nav-btn");
const taskOverlayElem = document.querySelector(".task-modal__overlay");
const deleteOverlayElem = document.querySelector(".delete-modal_overlay");
const taskCancelElem = document.querySelector(".task-modal__cancel");
const taskSubmitElem = document.querySelector(".task-modal__submit");
const taskCaptionElem = document.querySelector("#task-modal__caption");
const taskDescriptionElem = document.querySelector("#task-modal__description");
const taskFormElem = document.querySelector(".task-modal__form");
const h2Elem = document.querySelector(".task-element-h2");
const deleteModalCancel = document.querySelector(".delete-modal__cancel");
const deleteModalConfirm = document.querySelector(".delete-modal__confirm");

const filterAll = document.querySelector(".filter-btn--all");
const filterCompleted = document.querySelector(".filter-btn--completed");
const filterPending = document.querySelector(".filter-btn--deleted");

let todos = [];
let todoToDelete;
let currentFilter = "all";

function renderTodos() {
  ulElem.innerHTML = "";

  let filteredTodos = todos;

  if (currentFilter === "completed") {
    filteredTodos = todos.filter(function (todo) {
      return todo.completed === true;
    });
  } else if (currentFilter === "pending") {
    filteredTodos = todos.filter(function (todo) {
      return todo.completed === false;
    });
  }

  if (filteredTodos.length === 0) {
    h2Elem.classList.remove("hidden");
  } else {
    h2Elem.classList.add("hidden");
  }

  filteredTodos.forEach(function (todo) {
    /* -------------------------------------------- */

    const descriptionHTML =
      todo.description.trim() !== ""
        ? `<p class="todo-description">${todo.description}</p>`
        : "";

    ulElem.insertAdjacentHTML(
      "afterbegin",
      `
      <li class="todo-item">
        <button class="todo-delete" type="button">
          <svg class="filter-btn__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            <path d="M9 7V5H15V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M7 7L8 19H16L17 7" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
            <path d="M10 11V16M14 11V16" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          </svg>
        </button>
        <div class="todo-content">
          <div class="todo-header">
            <div class="todo-text">
              <h3 class="todo-title">${todo.title}</h3>
              ${descriptionHTML}
            </div>
            <input class="todo-input" type="checkbox">
          </div>
        </div>
      </li>`,
    );
    const liElem = ulElem.firstElementChild;

    const deleteBtn = liElem.querySelector(".todo-delete");
    const inputElem = liElem.querySelector(".todo-input");

    /* --------------------------------------------- */

    deleteBtn.addEventListener("click", function () {
      todoToDelete = {
        todo: todo,
        li: deleteBtn.parentElement,
      };

      deleteOverlayElem.classList.add("active");
    });

    inputElem.addEventListener("change", function () {
      todo.completed = inputElem.checked;

      renderTodos();
    });
  });

  spanAllCount.textContent = todos.length;

  const CompletedCount = todos.filter(function (todo) {
    return todo.completed === true;
  });

  const NotCompletedCount = todos.filter(function (todo) {
    return todo.completed === false;
  });

  spanCompleted.textContent = CompletedCount.length;
  spanDelete.textContent = NotCompletedCount.length;
}

renderTodos();

deleteModalCancel.addEventListener("click", function () {
  deleteOverlayElem.classList.remove("active");
});

deleteModalConfirm.addEventListener("click", function () {
  todoToDelete.li.remove();
  todos.splice(todos.indexOf(todoToDelete.todo), 1);

  deleteOverlayElem.classList.remove("active");
  renderTodos();

  todoToDelete = null;
});

navBtnElem.addEventListener("click", function () {
  taskOverlayElem.classList.add("active");
});

taskCancelElem.addEventListener("click", function () {
  taskOverlayElem.classList.remove("active");
});

taskFormElem.addEventListener("submit", function (event) {
  event.preventDefault();

  todos.push({
    title: taskCaptionElem.value,
    description: taskDescriptionElem.value,
    completed: false,
  });

  renderTodos();

  taskOverlayElem.classList.remove("active");
  taskFormElem.reset();
});

/* ------------------- task filters ------------------- */

function pStatus(paragraph) {
  if (todos.length > 0) {
    h2Elem.textContent = paragraph;
  } else {
    h2Elem.textContent = "کاری برای انجام دادن نداری؟";
  }
}

function changeFilterColor(selected) {
  filterAll.classList.add("filter-btn-color-unselect");
  filterCompleted.classList.add("filter-btn-color-unselect");
  filterPending.classList.add("filter-btn-color-unselect");

  filterAll.classList.remove("filter-btn-color-select");
  filterCompleted.classList.remove("filter-btn-color-select");
  filterPending.classList.remove("filter-btn-color-select");

  selected.classList.remove("filter-btn-color-unselect");
  selected.classList.add("filter-btn-color-select");
}

filterAll.addEventListener("click", function () {
  currentFilter = "all";
  changeFilterColor(filterAll);
  h2Elem.textContent = "کاری برای انجام دادن نداری؟";
  renderTodos();
});

filterCompleted.addEventListener("click", function () {
  currentFilter = "completed";
  changeFilterColor(filterCompleted);
  pStatus("هنوز هیچ کدوم رو انجام ندادی");
  renderTodos();
});

filterPending.addEventListener("click", function () {
  currentFilter = "pending";
  pStatus("همه رو انجام دادی");
  changeFilterColor(filterPending);
  renderTodos();
});
