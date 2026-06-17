let gender = prompt("please the enter your gender:", "male");
let age = +prompt("please the enter your age:", 18);


if (isNaN(age)){
    alert("Enter the number")
} else {

    if (gender === "male" || gender === "female"){

        if (gender === "female" || age < 18) {
            alert("you are not allowed to enter");
        } else {
            alert("you are allowed to enter")
        }
    } else {
        alert("The gender entered is incorrect");
    }
}
