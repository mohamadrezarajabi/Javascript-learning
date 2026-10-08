/*
 * localStorage only stores STRINGS --> arrays/objects can't be saved directly
 * JSON.stringify(value) --> converts a JS array/object INTO a JSON string (for saving)
 * JSON.parse(string)    --> converts a JSON string BACK into a real JS array/object (for reading)
 */

const users = ["ali", "amin", "amir", "mmd"];
const product = {
  id: 1,
  title: "Laptop",
  price: 50000000,
};

const rawBox = document.querySelector("#rawBox");
const parsedBox = document.querySelector("#parsedBox");
const statusElem = document.querySelector("#status");

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users)); // array --> '["ali","amin",...]'
  statusElem.textContent = "Users array saved ✓";
}

function saveProduct() {
  localStorage.setItem("productInfo", JSON.stringify(product)); // object --> '{"id":1,...}'
  statusElem.textContent = "Product object saved ✓";
}

function getData() {
  const rawUsers = localStorage.getItem("users"); // still a plain STRING at this point
  const rawProduct = localStorage.getItem("productInfo");

  // JSON.parse(null) returns null (no crash), so missing keys are safe here
  const localStorageUsers = JSON.parse(rawUsers);
  const localStorageProduct = JSON.parse(rawProduct);

  rawBox.textContent = `users: ${rawUsers}\nproductInfo: ${rawProduct}`;

  parsedBox.textContent = localStorageProduct
    ? `Product title: ${localStorageProduct.title}\nProduct price: ${localStorageProduct.price}\nFirst user: ${localStorageUsers ? localStorageUsers[0] : "-"}`
    : "Nothing saved yet";

  statusElem.textContent = "Data read & parsed ✓";
}

function clearAll() {
  localStorage.clear();
  rawBox.textContent = "-";
  parsedBox.textContent = "-";
  statusElem.textContent = "All cleared ✓";
}

document.querySelector("#saveUsersBtn").addEventListener("click", saveUsers);
document.querySelector("#saveProductBtn").addEventListener("click", saveProduct);
document.querySelector("#getBtn").addEventListener("click", getData);
document.querySelector("#clearBtn").addEventListener("click", clearAll);

/*
 * !NOTE: without JSON.stringify, localStorage.setItem("users", users) would save
 * the useless string "ali,amin,amir,mmd" (arrays) or "[object Object]" (objects)
 * and you'd lose the real structure forever --> ALWAYS stringify before saving
 * and parse after reading
 */