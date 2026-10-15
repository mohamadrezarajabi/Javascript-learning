/*
 * CSS Variables --> values like --primary-color that you write once in CSS
 * and reuse everywhere with var(--primary-color)
 * JS can read them (getComputedStyle) and change them (setProperty)
 * changing the variable ONCE updates EVERY element that uses it
 */

const root = document.querySelector(":root"); // :root is the <html> tag, where variables live

const readBtn = document.querySelector("#readBtn"); 
const changeBtn = document.querySelector("#changeBtn");
const inlineBtn = document.querySelector("#inlineBtn");

const stepText = document.querySelector("#stepText");
const codeText = document.querySelector("#codeText");
const resultText = document.querySelector("#resultText");

// Button 1 --> read the variable's final value
function readVariable() {
  const rootStyles = getComputedStyle(root); // all final styles of :root
  const value = rootStyles.getPropertyValue("--primary-color"); // read the variable by its name

  stepText.innerHTML =
    "1) JS asked the browser: what are the FINAL styles of :root?<br>" +
    "2) JS picked ONLY the variable --primary-color<br>" +
    "3) JS wrote the answer in the Result box";
  codeText.innerHTML = 'getComputedStyle(root).getPropertyValue("--primary-color")';
  resultText.innerHTML = `--primary-color = ${value}`;
}

// Button 2 --> change the variable's value
function changeVariable() {
  document.documentElement.style.setProperty("--primary-color", "#8ebb25"); // setProperty(name, newValue)
  stepText.innerHTML =
    "1) JS changed the variable --primary-color to green<br>" +
    "2) Every element that uses this variable changed color at the same time<br>" +
    "3) Look: the box, the buttons and the titles are all green now";
  codeText.innerHTML = 'document.documentElement.style.setProperty("--primary-color", "#8ebb25")';
  resultText.innerHTML = "Now click button 1 and button 3 and compare 😉";
}

// Button 3 --> read only the inline value of the variable
function readInlineVariable() {
  const inlineValue = document.documentElement.style.getPropertyValue("--primary-color");

  stepText.innerHTML =
    "1) JS looked ONLY at the style written directly on the <html> tag (inline)<br>" +
    "2) The variable written in the CSS file does not count here";
  codeText.innerHTML = 'document.documentElement.style.getPropertyValue("--primary-color")';

  if (inlineValue === "") {
    resultText.innerHTML = "--primary-color = (empty)<br>Nothing was set inline yet. Click button 2, then this button again!";
  } else {
    resultText.innerHTML = `--primary-color = ${inlineValue}`;
  }
}

readBtn.addEventListener("click", readVariable);
changeBtn.addEventListener("click", changeVariable);
inlineBtn.addEventListener("click", readInlineVariable);

/*
 * !NOTE: document.documentElement is the same <html> element as the :root we selected
 * before button 2, the inline read is empty because the value lives in the CSS file
 * after button 2, the inline read gives "green" because setProperty wrote it inline
 * getComputedStyle may return the value with a space at the start (" #89b4fa") --> that's normal
 * refresh the page to get the original color back
 */