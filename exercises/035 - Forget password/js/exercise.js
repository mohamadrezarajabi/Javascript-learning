let userName = prompt("Enter the username: ").trim().toLocaleLowerCase();

const users = [
  { id: 1, username: "amin", password: "amin1234" },
  { id: 2, username: "amir", password: "amir2025" },
  { id: 3, username: "babak", password: "babak321" },
  { id: 4, username: "sara", password: "sara987" },
  { id: 5, username: "mohammad", password: "mmd1404" },
  { id: 6, username: "ali", password: "ali123" },
  { id: 7, username: "zahra", password: "zahra456" },
  { id: 8, username: "qadir", password: "qadir777" },
  { id: 9, username: "mahdi", password: "mahdi999" },
  { id: 10, username: "fatemeh", password: "fatemeh111" },
];

if (userName.length === 0){
  alert("please enter a value")
} else{
  const validation = users.find(function (user) {
    return user.username === userName;
  });
  
  if (validation === undefined) {
    alert("User not found");
  } else {
    alert("Your password: " + validation.password);
  }
}
