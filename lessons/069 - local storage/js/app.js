/*
 * localStorage --> saves key-value pairs directly in the BROWSER
 * data PERSISTS even after closing the tab/browser (unlike variables, which reset)
 * NOTE: both key and value are always stored as STRINGS
 */

const statusElem = document.querySelector("#status");
const storageListElem = document.querySelector("#storageList");

// helper --> re-renders the whole localStorage content onto the page
function renderStorage() {
  storageListElem.innerHTML = ""; // clear old list before re-drawing

  if (localStorage.length === 0) {
    storageListElem.innerHTML = "<li>(empty)</li>";
    return;
  }

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); // get key name by its index
    const value = localStorage.getItem(key); // read its value
    const li = document.createElement("li");
    li.innerHTML = `${key}: <span>${value}</span>`;
    storageListElem.append(li);
  }
}

function setData() {
  localStorage.setItem("theme", "dark"); // setItem(key, value) --> saves/overwrites
  localStorage.setItem("name", "amin_saeedi");
  localStorage.setItem("age", 24); // 24 gets auto-converted to the STRING "24"

  statusElem.textContent = "Data saved ✓";
  renderStorage();
}

function getData() {
  const theme = localStorage.getItem("theme"); // getItem(key) --> reads a value, or null if missing

  if (theme === "dark") {
    statusElem.textContent = "تم دارک نمایش داده شود";
  } else {
    statusElem.textContent = "تم لایت نمایش داده شود";
  }
}

function removeData() {
  localStorage.removeItem("age"); // deletes ONLY this one key
  statusElem.textContent = "Age removed ✓";
  renderStorage();
}

function clearAll() {
  localStorage.clear(); // deletes EVERYTHING in localStorage
  statusElem.textContent = "All storage cleared ✓";
  renderStorage();
}

document.querySelector("#setThemeBtn").addEventListener("click", setData);
document.querySelector("#getThemeBtn").addEventListener("click", getData);
document.querySelector("#removeBtn").addEventListener("click", removeData);
document.querySelector("#clearBtn").addEventListener("click", clearAll);

renderStorage(); // show current state when the page first loads

/*
 * !NOTE: localStorage.setItem(24) stores "24" as a STRING, not the number 24
 * so localStorage.getItem("age") === 24 would be FALSE (string vs number)
 * always Number(value) or parseInt(value) if you need to do math with it later
 */