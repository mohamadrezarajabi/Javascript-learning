let Users = [];

let nameMy = prompt("Enter The name").trim();
let lname = prompt("Enter The last name").trim();
let age = +prompt("Enter The age");
let gmail = prompt("Enter The gmail").trim();



function signUser(name,lname,age,gmail){
  if (name.length < 3 || name.length > 10 || lname.length < 3 || lname.length > 15) {
    return "please enter the valid name";
    
  }
  if (isNaN(age) || age < 18 || age > 75){
    return "please enter the correct ege";
    
  }
  if (!gmail.endsWith("@gmail.com")){
    return "please enter the correct gmail";
    
  }

  Users.push({
    "id": Users.length + 1,
    "name": name,
    "lastName": lname,
    "age": age,
    "gmail": gmail,
  })

  console.log(Users);
  
}

signUser(nameMy,lname,age,gmail);