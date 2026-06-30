const todos = [
  { id: 1, title: "learn javascript", isCompleted: false },
  { id: 2, title: "finish html project", isCompleted: true },
  { id: 3, title: "read clean code book", isCompleted: false },
  { id: 4, title: "exercise for 30 minutes", isCompleted: false },
  { id: 5, title: "practice array methods", isCompleted: true },
  { id: 6, title: "watch javascript tutorial", isCompleted: false },
  { id: 7, title: "build a todo app", isCompleted: false },
  { id: 8, title: "review old codes", isCompleted: true },
  { id: 9, title: "solve two codewars kata", isCompleted: false },
  { id: 10, title: "push project to github", isCompleted: false },
];

let select = prompt("\n1.AddTodo\n2.Remove Todo\n3.Change of status\n4.show todolist:",).trim();

let userInput = "";

if (select === "1" || select === "2" || select === "3"){
  userInput = prompt("Enter todo title or id:").trim().toLowerCase();
}

if (userInput.length === 0) {
  console.log("Please enter a value");
}

function addTodo(todoTitle) {
  todos.push({
    id: todos.length + 1,
    title: todoTitle,
    isCompleted: false,
  });
}

function delTodo(todoValue) {
  let todoIndex;

  if (!isNaN(todoValue)) {
    todoIndex = todos.findIndex(function (todo) {
      return todo.id === Number(todoValue);
    });
  } else {
    todoIndex = todos.findIndex(function (todo) {
      return todo.title === todoValue;
    });
  }

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    console.log("Todo Successfully Deleted");
  } else {
    console.log("Todo not found");
  }
  todos.forEach(function (task, index) {
    product.id = index + 1;
  });
}

function determineStatus(todoValue) {
  let todoIndex;

  if (!isNaN(todoValue)) {
    todoIndex = todos.findIndex(function (todo) {
      return todo.id === Number(todoValue);
    });
  } else {
    todoIndex = todos.findIndex(function (todo) {
      return todo.title === todoValue;
    });
  }

  if (todoIndex === -1) {
    console.log("Todo not found");
    return;
  }

  let confirmStatus = confirm("Did you do it?");

  if (confirmStatus) {
    todos[todoIndex].isCompleted = true;
  } else {
    todos[todoIndex].isCompleted = false;
  }
}

function showTodoList() {
  todos.forEach(function (todo) {
    console.log(todo.id + " | " + todo.title.padEnd(28, " ") + "| " + todo.isCompleted);
  });
}

if (select == "1") {
  addTodo(userInput);
} else if (select === "2") {
  delTodo(userInput);
} else if (select === "3") {
  determineStatus(userInput);
} else if (select === "4") {
  showTodoList();
} else {
  console.log("please enter a valid input.");
}
