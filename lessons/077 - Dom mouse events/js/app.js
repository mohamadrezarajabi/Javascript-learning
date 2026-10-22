/*
 * Mouse Events --> let JS know what the mouse is doing on an element
 * mousedown  --> a mouse button was pressed down
 * mouseup    --> the mouse button was released
 * mouseenter --> the mouse came INTO the element
 * mouseleave --> the mouse went OUT of the element
 * mouseover  --> like mouseenter, but it ALSO fires on the children inside
 * mouseout   --> like mouseleave, but it ALSO fires on the children inside
 * mousemove  --> the mouse moved (fires again and again)
 */

const outerBox = document.querySelector("#outerBox");

const downCount = document.querySelector("#downCount");
const upCount = document.querySelector("#upCount");
const enterCount = document.querySelector("#enterCount");
const leaveCount = document.querySelector("#leaveCount");
const overCount = document.querySelector("#overCount");
const outCount = document.querySelector("#outCount");
const moveCount = document.querySelector("#moveCount");
const positionText = document.querySelector("#positionText");

const resetBtn = document.querySelector("#resetBtn");

const stepText = document.querySelector("#stepText");
const codeText = document.querySelector("#codeText");
const resultText = document.querySelector("#resultText");

// numbers that count how many times each event fired
let downNumber = 0;
let upNumber = 0;
let enterNumber = 0;
let leaveNumber = 0;
let overNumber = 0;
let outNumber = 0;
let moveNumber = 0;

function mouseDownHandler(event) {
  downNumber = downNumber + 1; // add 1 to the counter
  downCount.innerHTML = downNumber; // show the new number on the page

  stepText.innerHTML = "A mouse button was pressed down on the box (not released yet)";
  codeText.innerHTML = 'outerBox.addEventListener("mousedown", mouseDownHandler)';
  resultText.innerHTML = `Element under the mouse: ${event.target.className}`;
  console.log("Down Mouse");
  
}

function mouseUpHandler(event) {
  upNumber = upNumber + 1;
  upCount.innerHTML = upNumber;

  stepText.innerHTML = "The mouse button was released";
  codeText.innerHTML = 'outerBox.addEventListener("mouseup", mouseUpHandler)';
  resultText.innerHTML = `Element under the mouse: ${event.target.className}`;
    console.log("Up Mouse");
}

function mouseEnterHandler(event) {
  enterNumber = enterNumber + 1;
  enterCount.innerHTML = enterNumber;

  stepText.innerHTML = "The mouse came INTO the outer box from outside";
  codeText.innerHTML = 'outerBox.addEventListener("mouseenter", mouseEnterHandler)';
  resultText.innerHTML = `Element under the mouse: ${event.target.className}`;
}

function mouseLeaveHandler(event) {
  leaveNumber = leaveNumber + 1;
  leaveCount.innerHTML = leaveNumber;

  stepText.innerHTML = "The mouse went completely OUT of the outer box";
  codeText.innerHTML = 'outerBox.addEventListener("mouseleave", mouseLeaveHandler)';
  resultText.innerHTML = `Element under the mouse: ${event.target.className}`;
  console.log("mouse leave");
  
}

function mouseOverHandler(event) {
  overNumber = overNumber + 1;
  overCount.innerHTML = overNumber;

  stepText.innerHTML = "The mouse is over the outer box OR over a child inside it";
  codeText.innerHTML = 'outerBox.addEventListener("mouseover", mouseOverHandler)';
  resultText.innerHTML = `Element under the mouse: ${event.target.className}`;
}

function mouseOutHandler(event) {
  outNumber = outNumber + 1;
  outCount.innerHTML = outNumber;

  stepText.innerHTML = "The mouse left the outer box OR left a child inside it";
  codeText.innerHTML = 'outerBox.addEventListener("mouseout", mouseOutHandler)';
  resultText.innerHTML = `Element under the mouse: ${event.target.className}`;
}

function mouseMoveHandler(event) {
  moveNumber = moveNumber + 1;
  moveCount.innerHTML = moveNumber;

  // the event object holds the mouse position
  positionText.innerHTML = `x = ${event.clientX}, y = ${event.clientY}`;
  // we do NOT change the step/code/result boxes here
  // mousemove fires many times per second and would hide the other events
}

function resetCounters() {
  downNumber = 0;
  upNumber = 0;
  enterNumber = 0;
  leaveNumber = 0;
  overNumber = 0;
  outNumber = 0;
  moveNumber = 0;

  downCount.innerHTML = 0;
  upCount.innerHTML = 0;
  enterCount.innerHTML = 0;
  leaveCount.innerHTML = 0;
  overCount.innerHTML = 0;
  outCount.innerHTML = 0;
  moveCount.innerHTML = 0;
  positionText.innerHTML = "-";

  stepText.innerHTML = "All counters are back to 0";
  codeText.innerHTML = "-";
  resultText.innerHTML = "-";
}

outerBox.addEventListener("mousedown", mouseDownHandler);
outerBox.addEventListener("mouseup", mouseUpHandler);
outerBox.addEventListener("mouseenter", mouseEnterHandler);
outerBox.addEventListener("mouseleave", mouseLeaveHandler);
outerBox.addEventListener("mouseover", mouseOverHandler);
outerBox.addEventListener("mouseout", mouseOutHandler);
outerBox.addEventListener("mousemove", mouseMoveHandler);
resetBtn.addEventListener("click", resetCounters);

/*
 * !NOTE: the big difference --> mouseenter/mouseleave vs mouseover/mouseout
 * move the mouse from the pink area onto the small blue box (still inside the outer box):
 * mouseover and mouseout fire again, because the mouse moved to a DIFFERENT element
 * mouseenter and mouseleave do NOT fire, because the mouse is still inside the outer box
 * so most of the time mouseenter/mouseleave are the simpler and safer choice
 * order of a normal click: mousedown --> mouseup --> click
 * mousemove fires dozens of times per second, so we only update its counter and position
 */