/*
 * Date object --> new Date() takes a "photo" of the current date and time
 * then you can ask that photo for its parts: year, month, day, hour, ...
 */

let date = new Date();  // the photo of the time when the page loaded

const monthes = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// getDay() gives a number, so we use this array to turn the number into a name
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dateBtn = document.querySelector("#dateBtn");
const weekBtn = document.querySelector("#weekBtn");
const timeBtn = document.querySelector("#timeBtn");
const stampBtn = document.querySelector("#stampBtn");
const updateBtn = document.querySelector("#updateBtn");

const stepText = document.querySelector("#stepText");
const codeText = document.querySelector("#codeText");
const resultText = document.querySelector("#resultText");

// Button 1 --> year, month, day of the month
function showDate() {
  stepText.innerHTML =
    "1) JS asked the date object for the year, the month and the day<br>" +
    "2) getMonth() gives a NUMBER from 0 to 11, so JS used the monthes array to find the month name<br>" +
    "3) JS wrote the answers in the Result box";
  codeText.innerHTML =
    "date.getFullYear()<br>date.getMonth()<br>monthes[date.getMonth()]<br>date.getDate()";
  resultText.innerHTML =
    `Year = ${date.getFullYear()}<br>` +
    `Month number = ${date.getMonth()}<br>` +
    `Month name = ${monthes[date.getMonth()]}<br>` +
    `Day of the month = ${date.getDate()}`;
}

// Button 2 --> day of the week
function showWeekDay() {
  stepText.innerHTML =
    "1) JS asked the date object: which day of the WEEK is it?<br>" +
    "2) getDay() gives a number from 0 to 6 (0 = Sunday)<br>" +
    "3) JS used the days array to find the day name";
  codeText.innerHTML = "date.getDay()<br>days[date.getDay()]";
  resultText.innerHTML = `Day number = ${date.getDay()}<br>Day name = ${days[date.getDay()]}`;
}

// Button 3 --> hours, minutes, seconds, milliseconds
function showTime() {
  stepText.innerHTML =
    "1) JS asked the date object for the clock parts<br>" +
    "2) These numbers come from the moment the date was created, they do NOT tick<br>" +
    "3) JS wrote the answers in the Result box";
  codeText.innerHTML =
    "date.getHours()<br>date.getMinutes()<br>date.getSeconds()<br>date.getMilliseconds()";
  resultText.innerHTML =
    `Hours = ${date.getHours()}<br>` +
    `Minutes = ${date.getMinutes()}<br>` +
    `Seconds = ${date.getSeconds()}<br>` +
    `Milliseconds = ${date.getMilliseconds()}`;
}

// Button 4 --> timestamp
function showTimestamp() {
  stepText.innerHTML =
    "1) JS asked: how many milliseconds passed since 1 January 1970?<br>" +
    "2) JS divided it by 1000 to get SECONDS<br>" +
    "3) JS wrote the answer in the Result box";
  codeText.innerHTML = "date.getTime() / 1000";
  resultText.innerHTML = `Seconds since 1970 = ${date.getTime() / 1000}`;
}

// Button 5 --> make a new date (new photo of the current time)
function updateDate() {
  date = new Date(); // a NEW photo, so the old one is replaced

  stepText.innerHTML =
    "1) JS threw away the old date photo<br>" +
    "2) JS took a NEW photo of the current time<br>" +
    "3) Now click button 3 again and compare the seconds 😉";
  codeText.innerHTML = "date = new Date()";
  resultText.innerHTML = "New date created ✓";
}

dateBtn.addEventListener("click", showDate);
weekBtn.addEventListener("click", showWeekDay);
timeBtn.addEventListener("click", showTime);
stampBtn.addEventListener("click", showTimestamp);
updateBtn.addEventListener("click", updateDate);

/*
 * !NOTE: a date object does NOT tick like a clock, it keeps the time it was created
 * so clicking button 3 many times shows the SAME seconds until you click button 5
 * we used "let" (not "const") for date because button 5 gives it a new value
 * getMonth() starts from 0 (January = 0), that's why we need the monthes array
 */
