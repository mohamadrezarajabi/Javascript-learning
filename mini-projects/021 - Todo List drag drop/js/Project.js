/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

const ulElem = document.querySelectorAll(".task-list");
const btnCreateTask = document.querySelector(".add-task-btn");
const modalScreen = document.querySelector(".modal-screen");
const inputModal = document.querySelector(".modal-input");
const cancelBtnModal = document.querySelector(".cancel-btn");
const confirmBtnModal = document.querySelector(".confirm-btn");

btnCreateTask.addEventListener("click", function () {
  modalScreen.classList.add("active");
});

cancelBtnModal.addEventListener("click", function () {
  inputModal.value = "";
  modalScreen.classList.remove("active");
});

let count = 0;

confirmBtnModal.addEventListener("click", function () {
  const itemTitle = document.querySelectorAll(".item-title");

  if (inputModal.value.trim() !== "") {
    let liList = false;

    itemTitle.forEach(function (item) {
      if (item.textContent.trim() === inputModal.value.trim()) {
        liList = true;
      }
    });

    
    if (!liList) {
      count++;
      ulElem[0].insertAdjacentHTML(
        "beforeend",
        ` <li class="item" id="li${count}" draggable="true">
            <div class="item-title"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="item-svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffff"
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
          </li>
      `,
      );

      const itemTitle = document.querySelector(".item-title");
      itemTitle.textContent = inputModal.value

      const newItem = document.getElementById(`li${count}`);
      newItem.addEventListener("dragstart", dragstart);

      modalScreen.classList.remove("active");
      inputModal.value = "";
    }
  }
});

function dragstart(event) {
  event.dataTransfer.setData("elemendId", event.target.id);
}

function dragoverHandler(event) {
  event.preventDefault();
}

function dropHandler(event) {
  const elementid = event.dataTransfer.getData("elemendId");
  const id = document.getElementById(elementid);

  event.currentTarget.append(id);
}

ulElem.forEach(function (ul) {
  ul.addEventListener("click", function (event) {
    const btnTrash = event.target.closest(".item-svg");

    if (btnTrash) {
      btnTrash.parentElement.remove();
    }
  });
  ul.addEventListener("dragover", dragoverHandler);
  ul.addEventListener("drop", dropHandler);
});
