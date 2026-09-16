/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------- date -------------- */

function getCurrentDate() {
  const now = new Date();

  const parts = new Intl.DateTimeFormat("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);

  const get = (type) => parts.find((p) => p.type === type)?.value;

  return {
    date: `${get("day")} ${get("month")} ${get("hour")}:${get("minute")}`,
    time: `${get("hour")}:${get("minute")}`,
  };
}

/* ---------------------------------- */

let notes = [];

const tags = [
  { name: "برنامه‌نویسی", color: "#8a5cf6" },
  { name: "ورزش", color: "#10b981" },
  { name: "درس", color: "#3b82f6" },
  { name: "کار", color: "#f59e0b" },
  { name: "شخصی", color: "#ec4899" },
];

let selectedTag = tags[0];

// -------------------------

const inputSearch = document.querySelector(".header-search-input");
const SearchIcon = document.querySelector(".header-search-icon__search");
const SearchKbd = document.querySelector(".header-search-kbd")
const ulElem = document.querySelector(".notes");

const mobileQuery = window.matchMedia("(max-width: 520px)");

function updateSearchPlaceholder(e) {
  inputSearch.placeholder = e.matches ? "جستجو..." : "";
}

updateSearchPlaceholder(mobileQuery);
mobileQuery.addEventListener("change", updateSearchPlaceholder);


function filterSearch() {
  const query = inputSearch.value.trim().toLowerCase();

  SearchKbd.classList.toggle("visibility", query !== "");

  const searchNotes = notes.filter(function (note) {
    return (
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query)
    );
  });

  RenderNotes(searchNotes);
};

inputSearch.addEventListener("input", filterSearch);

document.body.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key.toLowerCase() === "k") {
    event.preventDefault();
    inputSearch.focus();
  }
});

/* --------------------------- */
const tagWrapper = document.querySelector(".tag-wrapper");
const tagBtn = document.querySelector(".tag-btn");
const tagName = document.querySelector(".tag-name");
const tagMenu = document.querySelector(".tag-menu");
const viewToggleBtns = document.querySelectorAll(".view-toggle-btn");
const notesList = document.querySelector(".notes");
const btnCreateTags = document.querySelector(".create-tags");
const tagModal = document.querySelector("#tagModal");
const modalClose = document.querySelector(".modal-close");
const btnAddTag = document.querySelector(".add-tag-btn");
const btnNewTagColor = document.querySelector(".new-tag-color");
const btnNewTagInput = document.querySelector(".new-tag-input");
const ulTagsList = document.querySelector(".tags-list");

tagBtn.addEventListener("click", function () {
  tagWrapper.classList.toggle("open");
});

btnCreateTags.addEventListener("click", function () {
  tagModal.classList.add("show");
});

modalClose.addEventListener("click", function () {
  tagModal.classList.remove("show");
});

tagModal.addEventListener("click", function (event) {
  if (event.target === tagModal) {
    tagModal.classList.remove("show");
  }
});

btnAddTag.addEventListener("click", function () {
  tagModal.classList.remove("show");

  if (btnNewTagInput.value.trim() !== "") {
    tags.push({
      name: btnNewTagInput.value,
      color: btnNewTagColor.value,
    });
  }

  RenderTags();
});

viewToggleBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    viewToggleBtns.forEach(function (item) {
      item.classList.remove("active");
    });

    btn.classList.add("active");

    if (btn.classList.contains("list-btn")) {
      notesList.classList.add("notes--list");
    } else {
      notesList.classList.remove("notes--list");
    }
  });
});

function selectTag(tag) {
  selectedTag = tag;

  tagName.textContent = tag.name;
  tagName.style.color = tag.color;
  tagBtn.style.backgroundColor = `${tag.color}40`;
  tagBtn.style.border = `1px solid ${tag.color}`;

  tagWrapper.classList.remove("open");
}

function RenderTags() {
  tagMenu.innerHTML = "";
  ulTagsList.innerHTML = "";

  tags.forEach(function (tag,i) {
    const liTagList = document.createElement("li");
    const deleteTag = document.createElement("button");

    liTagList.className = "liTagList flex-center";
    liTagList.textContent = tag.name;
    liTagList.style.backgroundColor = `${tag.color}40`;
    liTagList.style.color = tag.color;
    liTagList.style.border = `1px solid ${tag.color}`;

    deleteTag.className = "deleteTag";
    deleteTag.textContent = "×";
    deleteTag.type = "button";

    deleteTag.addEventListener("click", function () {
      tags.splice(i, 1);

      RenderTags();
    });

    const option = document.createElement("button");
    option.className = "tag-option";
    option.type = "button";

    const color = document.createElement("span");
    color.className = "tag-color";
    color.style.backgroundColor = tag.color;

    const name = document.createElement("span");
    name.textContent = tag.name;

    option.append(color, name);

    option.addEventListener("click", function () {
      selectTag(tag);
    });

    tagMenu.append(option);
    liTagList.append(deleteTag);
    ulTagsList.append(liTagList);
  });
}

RenderTags();

selectTag(tags[0]);

/*------------------------------*/

let editingNote = null;

const btnCreate = document.querySelector(".create-tasks");
const modalCreate = document.querySelector(".editor");
const CloseModalCreate = document.querySelector(".back-btn");
const dateInfoTime = document.querySelector(".date-info .time");
const inputModalCreate = document.querySelector(".note-title");
const noteContent = document.querySelector(".note-content");
const saveBtn = document.querySelector(".save-btn");
const h1ModalTitle = document.querySelector(".editor-title");


function RenderNotes(noteFilter=notes) {
  ulElem.innerHTML = "";

  const notesEmpty = document.querySelector(".notes-empty")
  if(notes.length === 0){
    notesEmpty.classList.remove("hidden");
  } else {
    notesEmpty.classList.add("hidden")
  }

  noteFilter.forEach(function (note) {
    const li = document.createElement("li");
    li.className = "note";

    const header = document.createElement("div");
    header.className = "li-header flex-between";

    const title = document.createElement("p");
    title.className = "li-header-title";
    title.textContent = note.title;

    const tag = document.createElement("div");
    tag.className = "li-header-tag flex-center";
    tag.textContent = note.tag.name;
    tag.style.color = note.tag.color;
    tag.style.backgroundColor = `${note.tag.color}4d`;

    const summary = document.createElement("p");
    summary.className = "li-summary";
    summary.textContent = note.content;

    const footer = document.createElement("div");
    footer.className = "li-footer flex-between";

    const footerRight = document.createElement("div");
    footerRight.className = "li-footer-right flex-center gap-md";

    const circle = document.createElement("div");
    circle.className = "li-footer-circle";
    circle.style.backgroundColor = note.tag.color;

    const date = document.createElement("div");
    date.className = "li-footer-date";
    date.textContent = note.date;

    const footerLeft = document.createElement("div");
    footerLeft.className = "li-footer-left flex-center gap-md";

    const pencil = document.createElement("div");
    pencil.className = "li-footer-pencil";
    pencil.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>`;

    const trash = document.createElement("div");
    trash.className = "li-footer-trash";
    trash.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;

    header.append(title, tag);
    footerRight.append(circle, date);
    footerLeft.append(pencil, trash);
    footer.append(footerRight, footerLeft);

    li.append(header, summary, footer);
    ulElem.append(li);

    pencil.addEventListener("click", function () {
      editingNote = note;
      inputModalCreate.value = note.title;
      noteContent.textContent = note.content;

      selectTag(note.tag);

      modalCreate.classList.add("show");
      h1ModalTitle.textContent = "ویرایش یادداشت";
    });

    trash.addEventListener("click", function () {
      const index = notes.indexOf(note);
      if (index !== -1){
        notes.splice(index, 1);
      }

      RenderNotes();
    });
  });
}

btnCreate.addEventListener("click", function () {
  editingNote = null;

  inputModalCreate.value = "";
  noteContent.textContent = "";

  modalCreate.classList.add("show");
  h1ModalTitle.textContent = "ایجاد یادداشت";
});

modalCreate.addEventListener("keydown", function (event) {
  if (event.key === "Enter"){
    event.preventDefault()
    saveBtn.click()
  }
})

tagModal.addEventListener("keydown", function (event) {
  if (event.key === "Enter"){
    event.preventDefault()
    btnAddTag.click()
  }
})

CloseModalCreate.addEventListener("click", function () {
  modalCreate.classList.remove("show");
  editingNote = null;
});



saveBtn.addEventListener("click", function () {
  if (inputModalCreate.value.trim() === "") return;

  if (editingNote) {
    editingNote.title = inputModalCreate.value;
    editingNote.content = noteContent.textContent;
    editingNote.tag = selectedTag;
    editingNote.date = getCurrentDate().date;

    editingNote = null;
  } else {
    const note = {
      title: inputModalCreate.value,
      content: noteContent.textContent,
      tag: selectedTag,
      date: getCurrentDate().date,
    };

    notes.push(note);
  }

  RenderNotes();

  inputModalCreate.value = "";
  noteContent.textContent = "";
  selectTag(tags[0]);

  modalCreate.classList.remove("show");
});

function updateDateInfo() {
  const currentDate = getCurrentDate();

  dateInfoTime.textContent = `ساعت ${currentDate.time}`;
}

updateDateInfo();

setInterval(updateDateInfo, 1000);
