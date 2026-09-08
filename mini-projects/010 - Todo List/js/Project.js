const ulElem = document.querySelector(".todo-list");
const spanAllCount = document.querySelector(".filter-btn--all .filter-btn__count");
const spanCompleted = document.querySelector(".filter-btn--completed .filter-btn__count");
const spanDelete = document.querySelector(".filter-btn--deleted .filter-btn__count");
let todos = [
  {
    title: "اموزش یادگیری",
    description: "مطالعه و تمرین",
    completed: false,
  },
];

todos.forEach(function (todo) {
  const liElem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const divContent = document.createElement("div");
  const divHeader = document.createElement("div");
  const divText = document.createElement("div");
  const h3ElemTitle = document.createElement("h3");
  const inputElem = document.createElement("input");
  const pElem = document.createElement("p");
  liElem.className = "todo-item";
  deleteBtn.className = "todo-delete";
  divContent.className = "todo-content";
  divHeader.className = "todo-header";
  divText.className = "todo-text"
  h3ElemTitle.className = "todo-title";
  inputElem.className = "todo-input";
  pElem.className = "todo-description";

  /* ---------------- btn -------------  */

  deleteBtn.type = "button";
  deleteBtn.innerHTML = `
  <svg
    class="filter-btn__icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7H19"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />

    <path
      d="M9 7V5H15V7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M7 7L8 19H16L17 7"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    />

    <path
      d="M10 11V16M14 11V16"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>`;

  /* ------------------- h3 --------------------*/
  h3ElemTitle.textContent = todo.title

  /* ------------------- input -----------------*/
  inputElem.type = "checkbox"

  /* ------------------- p -------------------- */
  pElem.textContent = todo.description

  /* -------------------------------------------- */

  ulElem.append(liElem);
  liElem.append(deleteBtn);
  liElem.append(divContent);
  divContent.append(divHeader);
  divHeader.append(divText);
  divHeader.append(inputElem);
  divText.append(h3ElemTitle)
  divText.append(pElem)

  /* --------------------------------------------- */

});

spanAllCount.textContent = todos.length

const CompletedCount = todos.filter(function (todo){
    return todo.completed === true
})
const DeletedCount = todos.filter(function (todo){
    return todo.completed === false
})

spanCompleted.textContent = CompletedCount.length
spanDelete.textContent = DeletedCount.length