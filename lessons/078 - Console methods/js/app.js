/*
 * console --> a built-in object with many methods that print messages in DevTools
 * the console is the developer's tool for testing code and finding problems
 * log / info / warn / error --> same job, but different color and icon
 * so you can find the important messages FAST
 */

const num1 = 2;
const num2 = 3;

const user = {
  id: 1,
  username: "Amin_saeedi",
  email: "ce01010101it@gmail.com",
};

const products = [
  { id: 1, title: "Laptop", price: 80000000 },
  { id: 2, title: "Soft Drink", price: 30000 },
  { id: 3, title: "Milk", price: 20000 },
];

const consoleBox = document.querySelector("#consoleBox");
const stepText = document.querySelector("#stepText");
const codeText = document.querySelector("#codeText");

// this function draws ONE line in the black box (our copy of the console)
function addLine(type, text) {
  consoleBox.innerHTML += `<div class="line ${type}" dir="auto">${text}</div>`;
}

// console.log --> a normal message
function runLog() {
  console.log(num1 + num2);
  console.log(
    `id: ${user.id}, username: ${user.username}, email: ${user.email}`,
  );

  addLine("log", num1 + num2);
  addLine(
    "log",
    `id: ${user.id}, username: ${user.username}, email: ${user.email}`,
  );

  stepText.innerHTML =
    "1) JS calculated num1 + num2\n" +
    "2) console.log printed the result as a normal white message\n" +
    "3) The second log joined the user's data into ONE long text";
  codeText.textContent =
    "console.log(num1 + num2)\n" +
    "console.log(`id: ${user.id}, username: ${user.username}, ...`)";
}

// console.error --> a red error message
function runError() {
  console.error("نام کاربری صحیح نمی‌باشد");

  addLine("error", "✖ نام کاربری صحیح نمی‌باشد");

  stepText.innerHTML =
    "1) console.error printed the message in RED with an error icon\n" +
    "2) Use it when something went wrong\n" +
    "3) It does NOT stop your program, it only shows the message";
  codeText.textContent = 'console.error("نام کاربری صحیح نمی‌باشد")';
}

// console.warn --> a yellow warning message
function runWarn() {
  console.warn("گذرواژه باید بیشتر از ۸ کاراکتر باشد");

  addLine("warn", "⚠ گذرواژه باید بیشتر از ۸ کاراکتر باشد");

  stepText.innerHTML =
    "1) console.warn printed the message in YELLOW with a warning icon\n" +
    "2) Use it for things that are not errors yet, but need attention";
  codeText.textContent = 'console.warn("گذرواژه باید بیشتر از ۸ کاراکتر باشد")';
}

// console.info --> an information message
function runInfo() {
  console.info("Num1 + Num2 =", num1 + num2);

  addLine("info", "ℹ Num1 + Num2 = " + (num1 + num2));

  stepText.innerHTML =
    "1) console.info printed an information message\n" +
    "2) You can give it MANY values separated by commas, it joins them with a space";
  codeText.textContent = 'console.info("Num1 + Num2 =", num1 + num2)';
}

// console.table (object) --> shows an object as a table
function runTableUser() {
  console.table(user);

  const rows =
    `<tr><td>id</td><td>${user.id}</td></tr>` +
    `<tr><td>username</td><td>${user.username}</td></tr>` +
    `<tr><td>email</td><td>${user.email}</td></tr>`;
  addLine(
    "log",
    `<table class="fake-table"><tr><th>(index)</th><th>Value</th></tr>${rows}</table>`,
  );

  stepText.innerHTML =
    "1) console.table took the user object\n" +
    "2) Every key (id, username, email) became a row in a table\n" +
    "3) Much easier to read than one long text";
  codeText.textContent = "console.table(user)";
}

// console.table (array) --> shows an array of objects as a table
function runTableProducts() {
  console.table(products);

  let rows = "";
  products.forEach(function (product, index) {
    rows += `<tr><td>${index}</td><td>${product.id}</td><td>${product.title}</td><td>${product.price}</td></tr>`;
  });
  addLine(
    "log",
    `<table class="fake-table"><tr><th>(index)</th><th>id</th><th>title</th><th>price</th></tr>${rows}</table>`,
  );

  stepText.innerHTML =
    "1) console.table took the products array\n" +
    "2) Every object became a ROW and every key became a COLUMN\n" +
    "3) Perfect for checking lists of data";
  codeText.textContent = "console.table(products)";
}

// console.time / console.timeEnd --> measures how long some code takes
function runTime() {
  console.time("For loop execute time"); // start the timer with a name

  const start = new Date().getTime(); // our own timer, for the copy in the page
  for (let i = 0; i < 1000000; i++) {
    // Codes
  }
  const end = new Date().getTime();

  console.timeEnd("For loop execute time"); // stop the timer and print the time

  addLine("log", `For loop execute time: ${end - start} ms`);

  stepText.innerHTML =
    "1) console.time started a timer with a name\n" +
    "2) JS ran a loop 1,000,000 times\n" +
    "3) console.timeEnd stopped the timer and printed how long it took\n" +
    "4) The name must be the SAME in time and timeEnd";
  codeText.textContent =
    'console.time("For loop execute time")\n' +
    "for (let i = 0; i < 1000000; i++) { }\n" +
    'console.timeEnd("For loop execute time")';
}

// console.group --> puts logs inside a folder-like group
function runGroup() {
  console.log("Before group");
  console.group("Step 1 logs");
  console.log("Log 1");
  console.log("Log 2");
  console.log("Log 3");
  console.groupEnd();
  console.log("After group");

  addLine("log", "Before group");
  addLine("group", "▼ Step 1 logs");
  addLine("indent log", "Log 1");
  addLine("indent log", "Log 2");
  addLine("indent log", "Log 3");
  addLine("log", "After group");

  stepText.innerHTML =
    "1) console.group opened a group named Step 1 logs\n" +
    "2) Every log after it moved a little to the right, inside the group\n" +
    "3) console.groupEnd closed the group\n" +
    "4) The next log went back to normal position";
  codeText.textContent =
    'console.group("Step 1 logs")\n' +
    'console.log("Log 1") ...\n' +
    "console.groupEnd()";
}

// console.assert --> prints an error ONLY if the condition is false
function runAssert() {
  const isTrue = num1 + num2 === 6; // 2 + 3 is 5, so this is false

  console.assert(isTrue, "Expression returned false");

  if (isTrue === false) {
    addLine("error", "✖ Assertion failed: Expression returned false");
  }

  stepText.innerHTML =
    "1) JS checked: is num1 + num2 equal to 6?\n" +
    "2) 2 + 3 is 5, so the answer is FALSE\n" +
    "3) Because it was false, console.assert printed the error message\n" +
    "4) If it was TRUE, nothing would be printed at all";
  codeText.textContent =
    'console.assert(num1 + num2 === 6, "Expression returned false")';
}

// console.log with %c --> styled text
function runStyle() {
  console.log("%cGeeks for Geeks", "color: green; background-color: white;");

  addLine("log", `<span class="styled-text">Geeks for Geeks</span>`);

  stepText.innerHTML =
    "1) %c tells console: the text after me needs a style\n" +
    "2) The second value is the CSS style (written like normal CSS)\n" +
    "3) Only the text after %c got the green color and white background";
  codeText.textContent =
    'console.log("%cGeeks for Geeks", "color: green; background-color: white;")';
}

// console.clear --> cleans the console
function runClear() {
  console.clear();
  consoleBox.innerHTML = ""; // also clean our copy

  stepText.innerHTML =
    "1) console.clear removed all the old messages from the console\n" +
    "2) Our black box is empty again";
  codeText.textContent = "console.clear()";
}

document.querySelector("#logBtn").addEventListener("click", runLog);
document.querySelector("#errorBtn").addEventListener("click", runError);
document.querySelector("#warnBtn").addEventListener("click", runWarn);
document.querySelector("#infoBtn").addEventListener("click", runInfo);
document.querySelector("#tableUserBtn").addEventListener("click", runTableUser);
document
  .querySelector("#tableProductsBtn")
  .addEventListener("click", runTableProducts);
document.querySelector("#timeBtn").addEventListener("click", runTime);
document.querySelector("#groupBtn").addEventListener("click", runGroup);
document.querySelector("#assertBtn").addEventListener("click", runAssert);
document.querySelector("#styleBtn").addEventListener("click", runStyle);
document.querySelector("#clearBtn").addEventListener("click", runClear);

/*
 * !NOTE: the black box is only a COPY drawn with innerHTML, the REAL output is in DevTools (F12)
 * the real console.time shows tiny numbers like 3.2 ms, our copy shows whole milliseconds,
 * and the time changes on every click because it depends on your computer
 * console.groupEnd() does not need a name, you wrote groupEnd("Step 1 logs") but the name is ignored
 * console.assert prints ONLY when the condition is false, that's why it's good for quick checks
 * in the real console, if "Preserve log" is ON, console.clear() will not remove the old messages
 */
