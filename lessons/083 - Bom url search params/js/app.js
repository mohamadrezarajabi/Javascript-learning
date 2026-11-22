/*
  URLSearchParams:
  Gets query parameters from the current URL.

  Example URL:
  ?id=2&name=qadir&role=admin
*/

const users = [
  { id: 1, username: "amin", email: "amin@gmail.com", age: 24 },
  { id: 2, username: "qadir", email: "qadir@gmail.com", age: 22 },
  { id: 3, username: "babak", email: "babak@gmail.com", age: 25 },
  { id: 4, username: "sasan", email: "sasan@gmail.com", age: 28 },
];

const userElem = document.querySelector("#user-info");
const queryInfo = document.querySelector("#query-info");

//* Exc 1 - Get URL Parameters

const searchParams = new URLSearchParams(location.search);

const userID = searchParams.get("id");
const username = searchParams.get("name");
const userRole = searchParams.get("role");

//* Exc 2 - Display Query Parameters

queryInfo.textContent =
  `User ID: ${userID ?? "Not provided"} | ` +
  `Username: ${username ?? "Not provided"} | ` +
  `Role: ${userRole ?? "Not provided"}`;

//* Exc 3 - Find User

const mainUser = users.find(function (user) {
  return user.id === Number(userID);
});

//* Exc 4 - Display User Information

if (userID !== null && userID.trim() !== "" && mainUser) {
  userElem.textContent =
    `Name: ${mainUser.username} | ` +
    `Email: ${mainUser.email} | ` +
    `Age: ${mainUser.age}`;
} else {
  userElem.textContent = `User not found with ID: ${userID ?? "Not provided"}`;
}

/*
  !NOTE:
  - URLSearchParams gets query parameters.
  - get() returns the parameter value or null.
  - Number() converts a string into a number.
  - find() returns the first matching array element or undefined.
*/