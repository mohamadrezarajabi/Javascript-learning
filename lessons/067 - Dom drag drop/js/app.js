/*
 * Drag & Drop API --> lets the user physically drag an element and drop it
 * into another element; needs BOTH sides handled: the dragged item AND the drop target
 */

const draggables = document.querySelectorAll(".draggable");
const dropZone = document.querySelector("#dropZone");

// dragstart --> fires ONCE, right when dragging begins on the source element
function dragStartHandler(event) {
  event.dataTransfer.setData("elementID", event.target.id);
  console.log(event);
  
}

// dragover --> fires REPEATEDLY while hovering over a potential drop target
function dragOverHandler(event) {
  event.preventDefault();
}

// drop --> fires when the user actually releases the item over the drop target
function dropHandler(event) {
  const elemendId = event.dataTransfer.getData("elementID");
  const tagertElem = document.querySelector(`#${elemendId}`);
  if (dropZone.textContent.trim() === "Drop Here") {
    dropZone.textContent = "";
  }
  event.target.append(tagertElem);
}

dropZone.addEventListener("dragover", dragOverHandler);
dropZone.addEventListener("drop", dropHandler);
draggables.forEach(function (drag) {
  drag.addEventListener("dragstart", dragStartHandler);
});

/*
 * !NOTE: dragover MUST call event.preventDefault(), otherwise the browser's
 * default behavior (which BLOCKS dropping) stays active and "drop" never fires
 * dataTransfer is the bridge --> it's how the drop target learns WHAT was dragged
 */
