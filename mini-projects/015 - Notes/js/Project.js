/* -------------------- loader ---------------- */

const loader = document.querySelector(".loader");

function Showloading() {
  document.querySelector(".loader").classList.add("hidden");
  document.body.classList.remove("loading");
}

/* ---------------- date -------------- */

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

const result = `${get("day")} ${get("month")} ${get("hour")}:${get("minute")}`;
const timeResult = `${get("hour")}:${get("minute")}`;

/* ---------------------------------- */

let notes = [];

const tags = [
  { name: "برنامه‌نویسی", color: "#8a5cf6", className: "tag-purple" },
  { name: "ورزش", color: "#10b981", className: "tag-green" },
  { name: "درس", color: "#3b82f6", className: "tag-blue" },
  { name: "کار", color: "#f59e0b", className: "tag-orange" },
  { name: "شخصی", color: "#ec4899", className: "tag-pink" },
];

let selectedTag = tags[0];

// -------------------------

const inputSearch = document.querySelector(".header-search-input");
const ulElem = document.querySelector(".notes");

inputSearch.addEventListener("blur", function () {
  inputSearch.value = "";
});

document.body.addEventListener("keyup", function (event) {
  if (event.key === "k" && event.ctrlKey === true) {
    inputSearch.focus();
  }
});

/* --------------------------- */

const tagWrapper = document.querySelector(".tag-wrapper");
const tagBtn = document.querySelector(".tag-btn");
const tagName = document.querySelector(".tag-name");
const tagMenu = document.querySelector(".tag-menu");

tagBtn.addEventListener("click", function () {
  tagWrapper.classList.toggle("open");
});

function selectTag(tag) {
  selectedTag = tag;

  tagName.textContent = tag.name;

  tagBtn.classList.remove(
    "tag-purple",
    "tag-green",
    "tag-blue",
    "tag-orange",
    "tag-pink",
  );

  tagBtn.classList.add(tag.className);

  tagWrapper.classList.remove("open");
}

tags.forEach(function (tag) {
  const option = document.createElement("button");
  option.className = "tag-option";
  option.type = "button";

  const color = document.createElement("span");
  color.className = `tag-color tag-color-${tag.className.replace("tag-", "")}`;

  const name = document.createElement("span");
  name.textContent = tag.name;

  option.append(color, name);

  option.addEventListener("click", function () {
    selectTag(tag);
  });

  tagMenu.append(option);
});

selectTag(tags[0]);

/*------------------------------*/

let editingNote = null;

const btnCreate = document.querySelector(".create-tasks");
const modalCreate = document.querySelector(".editor");
const CloseModalCreate = document.querySelector(".back-btn");
const dateInfoTime = document.querySelector(".date-info");
const inputModalCreate = document.querySelector(".note-title");
const noteContent = document.querySelector(".note-content");
const saveBtn = document.querySelector(".save-btn");
const h1ModalTitle = document.querySelector(".editor-title");

function RenderNotes() {
  ulElem.innerHTML = "";

  notes.forEach(function (note, i) {
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

      modalCreate.classList.remove("hidden");
      h1ModalTitle.textContent = "ویرایش یادداشت";
    });

    trash.addEventListener("click", function () {
      notes.splice(i, 1);

      li.remove();
    });
  });
}

btnCreate.addEventListener("click", function () {
  modalCreate.classList.remove("hidden");
  h1ModalTitle.textContent = "ایجاد یادداشت";
});

CloseModalCreate.addEventListener("click", function () {
  modalCreate.classList.add("hidden");
});

saveBtn.addEventListener("click", function () {
  if (inputModalCreate.value.trim() === "") return;

  if (editingNote) {
    editingNote.title = inputModalCreate.value;
    editingNote.content = noteContent.textContent;
    editingNote.tag = selectedTag;

    editingNote = null;
  } else {
    const note = {
      title: inputModalCreate.value,
      content: noteContent.textContent,
      tag: selectedTag,
      date: result,
    };
    notes.push(note);
  }

  RenderNotes();

  inputModalCreate.value = "";
  noteContent.textContent = "";
  selectTag(tags[0]);

  modalCreate.classList.add("hidden");
});

dateInfoTime.innerHTML = `ساعت ${timeResult}`;
