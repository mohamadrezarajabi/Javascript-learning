/*
 * Method Chaining --> calling methods one after another in ONE line
 * text.trim().toUpperCase()
 * 1) trim() runs first and gives back a new text
 * 2) toUpperCase() runs on THAT new text
 * every method in the chain works on the result of the method before it
 */

const textInput1 = document.querySelector("#textInput1");
const textInput3 = document.querySelector("#textInput3");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const stepText = document.querySelector("#stepText");
const codeText = document.querySelector("#codeText");
const resultText = document.querySelector("#resultText");

//* Exc 1 --> trim() then toUpperCase()
function runExercise1() {
  const text = textInput1.value;

  // we split the chain into pieces ONLY to show what happens in the middle
  const trimmed = text.trim(); // removes the spaces from the start and the end
  const upper = trimmed.toUpperCase(); // makes all the letters capital

  stepText.innerHTML =
    "1) JS took the text from the input box\n" +
    "2) trim() removed the empty spaces from the start and the end\n" +
    "3) toUpperCase() made the letters capital\n" +
    "4) Both methods ran in ONE line, one after another";
  codeText.textContent = "text.trim().toUpperCase()";
  resultText.innerHTML =
    `Start: [${text}] (length ${text.length})\n` +
    `After trim(): [${trimmed}] (length ${trimmed.length})\n` +
    `After toUpperCase(): [${upper}]`;
}

//* Exc 2 --> filter() then map() then find()
function runExercise2() {
  const numbers = [1, 89, 65, 23, 21, 12, 34, 90, 54, 25];

  // step by step (only to show the middle results)
  const filtered = numbers.filter(function (number) {
    return number < 50; // keep only the numbers smaller than 50
  });
  const mapped = filtered.map(function (number) {
    return number * 2; // double every number
  });

  // the real chain, all in one line of work
  const maxFrom25 = numbers
    .filter(function (number) {
      return number < 50;
    })
    .map(function (number) {
      return number * 2;
    })
    .find(function (number) {
      return number > 25; // the FIRST number bigger than 25
    });

  stepText.innerHTML =
    "1) filter() kept only the numbers smaller than 50\n" +
    "2) map() doubled each number that was left\n" +
    "3) find() looked at the doubled numbers and gave back the FIRST one bigger than 25\n" +
    "4) Three methods, one chain";
  codeText.textContent =
    "numbers\n" +
    "  .filter(function (number) { return number < 50; })\n" +
    "  .map(function (number) { return number * 2; })\n" +
    "  .find(function (number) { return number > 25; })";
  resultText.innerHTML =
    `Start: [${numbers.join(", ")}]\n` +
    `After filter(): [${filtered.join(", ")}]\n` +
    `After map(): [${mapped.join(", ")}]\n` +
    `After find(): ${maxFrom25}`;
}

//* Exc 3 --> split() then reverse() then join()
function runExercise3() {
  const text = textInput3.value;

  if (text === "") {
    stepText.innerHTML = "The input box is empty, type a word first 🙂";
    codeText.textContent = "-";
    resultText.innerHTML = "-";
    return;
  }

  // step by step (only to show the middle results)
  const letters = text.split(""); // text --> array of letters
  const reversedLetters = text.split("").reverse(); // same array, but backwards
  const reversedText = reversedLetters.join(""); // array --> text again

  const isSame = text.split("").reverse().join("") === text; // the real chain

  stepText.innerHTML =
    '1) split("") cut the text into single letters (an array)\n' +
    "2) reverse() flipped the array backwards\n" +
    '3) join("") glued the letters back into one text\n' +
    "4) JS compared the new text with the original text";
  codeText.textContent = 'text.split("").reverse().join("") === text';
  resultText.innerHTML =
    `Start: ${text}\n` +
    `After split(""): [${letters.join(", ")}]\n` +
    `After reverse(): [${reversedLetters.join(", ")}]\n` +
    `After join(""): ${reversedText}\n` +
    `Same as the start? ${isSame}`;
}

btn1.addEventListener("click", runExercise1);
btn2.addEventListener("click", runExercise2);
btn3.addEventListener("click", runExercise3);

/*
 * !NOTE: chaining works because each method GIVES BACK something the next method can use
 * trim() gives a text, so toUpperCase() can run on it
 * filter() and map() give an array, so the next array method can run on it
 * the variable name maxFrom25 is misleading: find() returns the FIRST match, not the biggest
 * Exc 3 is case sensitive: "Gig" is NOT the same as "giG", so the result is false
 * we used textContent for the code box because the text has < and > in it,
 * and innerHTML could read them as HTML tags
 */
