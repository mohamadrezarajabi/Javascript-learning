/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------------- */

let library = JSON.parse(localStorage.getItem("library")) || [];

const numCount = document.querySelector(".number-count");
const btnAdd = document.querySelector(".btn-Add");
const modal = document.querySelector(".modal-overlay");
const submit = document.querySelector(".submit");
const cancel = document.querySelector(".cancel");
const backModal = document.querySelector(".back-modal");
const tableBody = document.querySelector(".tbody-table");
const inputElem = document.querySelectorAll(".input-modal input");

btnAdd.addEventListener("click", function () {
  modal.classList.add("active");
});
numCount.textContent = library.length;

function addToLibrary() {
  const bookTitle = document.querySelector("#book-title").value;
  const author = document.querySelector("#author").value;
  const publication = document.querySelector("#publication").value;
  
  const year = Number(publication);

  if (
    bookTitle.trim() !== "" &&
    author.trim() !== "" &&
    publication.trim() !== "" &&
    Number.isInteger(year) &&
    year >= 1000 &&
    year <= 2026
  ) {
    library.push({
      title: bookTitle,
      author: author,
      date: publication,
    });

    localStorage.setItem("library", JSON.stringify(library));
    closeModal();
    addDom();
    numCount.textContent = library.length;
  }
}

function closeModal() {
  modal.classList.remove("active");
  inputElem.forEach(function (input) {
    input.value = "";
  });
}

function addDom() {
  tableBody.innerHTML = "";
  library.forEach(function (book) {
    tableBody.insertAdjacentHTML(
      "beforeend",
      `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.date}</td>
      </tr>
      `,
    );
  });
}
addDom();

submit.addEventListener("click", addToLibrary);
cancel.addEventListener("click", closeModal);
backModal.addEventListener("click", closeModal);
