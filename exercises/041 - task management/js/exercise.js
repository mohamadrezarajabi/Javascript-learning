const employees = [
  {
    id: 1,
    name: "mohammad",
    tasks: [
      "fix login page",
      "learn javascript"
    ]
  },
  {
    id: 2,
    name: "ali",
    tasks: [
      "design landing page",
      "update css"
    ]
  },
  {
    id: 3,
    name: "sara",
    tasks: [
      "test api",
      "write documentation"
    ]
  },
  {
    id: 4,
    name: "amir",
    tasks: [
      "deploy project",
      "review pull request"
    ]
  }
];

let EmployeeName = prompt(" enter the employee's name:").trim().toLowerCase()
let FixDashboard = prompt("Enter the task: ").toLowerCase().trim()

if (EmployeeName.length === 0 || FixDashboard.length === 0) {
  console.log("Please enter an entry");
} else{
  
  let findEmployee = employees.find(function (employee) {
    return employee.name === EmployeeName
  })

  if (findEmployee === undefined){
    console.log("Employee not found");
  } else {
    findEmployee.tasks.push(FixDashboard);
    console.log("Task successful added");
  };
}

employees.forEach(function (employee) {
  console.log(employee.name);
  console.log("------------");
  for (let i = 0; i < employee.tasks.length; i++){
    console.log((i + 1) + " : " + employee.tasks[i]);
  }
  console.log("");
})