/*
 * Full Drag & Drop event lifecycle:
 * Dragged element  --> dragstart -> drag (repeats) -> dragend
 * Dropped-on target --> dragenter -> dragover (repeats) -> dragleave OR drop
 */

const logElem = document.querySelector("#log");
const dropZone = document.querySelector("#dropZone");

// helper --> writes each fired event to the page instead of console.log
function logEvent(label) {
  const li = document.createElement("li");
  li.textContent = label;
  logElem.append(li);
  logElem.scrollTop = logElem.scrollHeight; // auto-scroll to latest
}

//* Dragged side --> events fired ON the element being dragged

function dragStartHandler(event) {
  event.dataTransfer.setData("elementId", event.target.id);
  logEvent("[Drag Start] --> fires ONCE when dragging begins");
}

function dragHandler() {
  logEvent("[Drag] --> fires REPEATEDLY while actively dragging");
}

function dragEndHandler() {
  logEvent("[Drag End] --> fires ONCE when the drag is released (dropped or cancelled)");
}

//* Dropped-on side --> events fired ON the target zone

function dragEnterHandler() {
  dropZone.classList.add("drag-over");
  logEvent("[Drag Enter] --> fires ONCE when the dragged item enters this zone");
}

function dragOverHandler(event) {
  event.preventDefault(); // !NOTE: required or "drop" will never fire
  logEvent("[Drag [over] --> fires REPEATEDLY while actively dragging");
}

function dragLeaveHandler() {
  dropZone.classList.remove("drag-over");
  logEvent("[Drag Leave] --> fires ONCE when the dragged item leaves without dropping");
}

function dropHandler(event) {
  event.preventDefault();
  const elementId = event.dataTransfer.getData("elementId");
  const targetElement = document.getElementById(elementId);

  dropZone.append(targetElement);
  dropZone.classList.remove("drag-over");
  logEvent("[Drop] --> fires ONCE when the item is released INSIDE this zone");
}

document.querySelectorAll(".draggable").forEach(function (item) {
  item.addEventListener("dragstart", dragStartHandler);
  item.addEventListener("drag", dragHandler);
  item.addEventListener("dragend", dragEndHandler);
});

dropZone.addEventListener("dragenter", dragEnterHandler);
dropZone.addEventListener("dragover", dragOverHandler);
dropZone.addEventListener("dragleave", dragLeaveHandler);
dropZone.addEventListener("drop", dropHandler);

/*
 * !NOTE: dragover fires MANY times per second (like mousemove/scroll)
 * so we don't log it here --> would flood the log instantly
 * dragenter/dragleave each fire only ONCE per zone entry/exit, safe to log
 */