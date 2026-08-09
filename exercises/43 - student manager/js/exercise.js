  const students = [
    { id: 1, name: "ali", age: 20, score: 17, nationalId: 1152546788 },
    { id: 2, name: "reza", age: 22, score: 14, nationalId: 8112546751 },
    { id: 3, name: "sara", age: 19, score: 18, nationalId: 1412546798 },
    { id: 4, name: "mohammad", age: 21, score: 11, nationalId: 2112546771 },
    { id: 5, name: "amir", age: 23, score: 20, nationalId: 7112546452 },
  ];

  let select = prompt(
    "1. Add Student\n2. Remove Student\n3. Change Score\n4. Show All Students\n5. Show Passed Students",
  ).trim();

  
  
  function app() {
    if (select.length === 0 || isNaN(select)) {
      console.log("please enter number");
      return;
    }

    select = Number(select);

    function Add(name, age, score, nationalId) {
      if (
        age < 18 ||
        score < 0 ||
        score > 20 ||
        String(nationalId).length !== 10 ||
        isNaN(age) ||
        isNaN(score) ||
        isNaN(nationalId)
      ) {
        console.log("Enter the correct value.");
        return;
      }

      let findn = students.find(function (student) {
        return student.nationalId === nationalId;
      });

      if (!findn) {
        students.push({
          id: students.length + 1,
          name: name,
          age: age,
          score: score,
          nationalId: nationalId,
        });
        console.log("User added successfully");
        return;
      } else {
        console.log("This user exists");
        return;
      }
    }

    function find(id_or_nationalId) {
      if (isNaN(id_or_nationalId)) {
        console.log("Please Enter the number.");
        return;
      }

      let st = prompt("how do you want to find the user(i/n): ")
        .trim()
        .toLocaleLowerCase();
      let findIndex;

      if (st === "i") {
        findIndex = students.findIndex(function (student) {
          return student.id === id_or_nationalId;
        });
      } else if (st === "n") {
        findIndex = students.findIndex(function (student) {
          return student.nationalId === id_or_nationalId;
        });
      } else {
        console.log("Please enter only (i/n)");
        return;
      }

      if (findIndex === -1) {
        console.log("User not found");
        return;
      }

      return [st, findIndex];
    }

    function Del(id_or_nationalId) {
      let result = find(id_or_nationalId);

      if (!result) {
        return;
      }

      students.splice(result[1], 1);

      students.forEach(function (student, index) {
        student.id = index + 1;
      });
      console.log("user successfully deleted.");
      return;
    }

    function Change(id_or_nationalId, score) {
      let result = find(id_or_nationalId);

      if (!result) {
        return;
      }

      if (isNaN(score) || score < 0 || score > 20) {
        console.log("Enter the correct value.");
        return;
      }

      students[result[1]].score = score;

      console.log("Score successsfully changed.");
      return;
    }

    function Show() {
      if (students.length === 0) {
        console.log("Student not found.");
        return;
      }

      students.forEach(function (student) {
        console.log(
          `id: ${String(student.id).padEnd(3, " ")} | name: ${student.name.padEnd(12, " ")} | age: ${String(student.age).padEnd(3, " ")} | score: ${String(student.score).padEnd(3, " ")} | nationalID: ${String(student.nationalId).padEnd(12, " ")}`,
        );
      });
    }

    function passStudent() {
      let pass = students.filter(function (student) {
        return student.score >= 10;
      });

      if (pass.length === 0) {
        console.log("Student not pass.");
        return;
      }
      pass.forEach(function (student) {
        console.log(
          `id: ${String(student.id).padEnd(3, " ")} | name: ${student.name.padEnd(12, " ")} | age: ${String(student.age).padEnd(3, " ")} | score: ${String(student.score).padEnd(3, " ")} | nationalID: ${String(student.nationalId).padEnd(12, " ")}`,
        );
      });
    }

    return {
      Add,
      Del,
      Change,
      Show,
      passStudent,
    };
  }

  let name;
  let age;
  let score;
  let nationalId;
  let id_or_nationalId;

  const program = app();

  if (select === 1) {
    name = prompt("Enter student name:").trim().toLowerCase();
    age = +prompt("Enter student age:").trim();
    score = +prompt("Enter student score:").trim();
    nationalId = +prompt("Enter student national ID:").trim();

    program.Add(name, age, score, nationalId);
  } else if (select === 2) {
    id_or_nationalId = +prompt("Enter student ID or national ID:").trim();

    program.Del(id_or_nationalId);
  } else if (select === 3) {
    id_or_nationalId = +prompt("Enter student ID or national ID:").trim();

    score = +prompt("Enter new score:").trim();

    program.Change(id_or_nationalId, score);
  } else if (select === 4) {
    program.Show();
  } else if (select === 5) {
    program.passStudent();
  } else {
    console.log("Please enter a number between 1 and 5.");
  }
