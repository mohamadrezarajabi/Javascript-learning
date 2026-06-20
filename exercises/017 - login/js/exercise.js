const userName = prompt("Enter Username: ").trim().toLowerCase();
let password = prompt("Enter password: ").trim();

function sign(user,pass) {

    if (userName.length > 3 && password.length > 8){
        return true
    } else {
        return false
    }
}

if (userName === 'ali') {
    if (sign(userName,password) === true) {
        alert("User successfully loggin.");
    } else {
        alert("enter the correct amount");
    }
} else {
    alert("User not found");
}