const userName = prompt("Enter Username: ");
let password = prompt("Enter password: ");

function sign(user,pass) {

    if (userName.length > 3 && password.length > 8){
        return true
    } else {
        return "enter the correct amount"
    }
}

alert(sign(userName,password));