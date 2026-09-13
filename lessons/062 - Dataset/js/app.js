/*
 * dataset --> reads custom "data-*" attributes from HTML as a JS object
 * data-name="Ali" becomes element.dataset.name --> "Ali" (camelCase auto-conversion)
 */

const users = document.querySelectorAll(".user");
const status = document.querySelector("#status");

users.forEach(function (user) {
  user.addEventListener("click", function (event) {
    const age = event.target.dataset.age;   // reads data-age --> string, e.g. "24"
    const name = event.target.dataset.name; // reads data-name --> "Ali"

    status.textContent = `Name: ${name} | Age: ${age}`;
  });
});

/*
 * !NOTE: dataset values are ALWAYS strings, even if they look like numbers
 * ("24" not 24) --> use Number(age) or parseInt(age) if you need real math on it
 * multi-word attributes convert kebab-case to camelCase:
 * data-user-id="5" --> element.dataset.userId
 */