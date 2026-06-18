let num1 = +prompt("please the enter frist number:", 1);
let num2 = +prompt("please the enter second number:", 1);

function sum(num1,num2){
    if (isNaN(num1) || isNaN(num2)) {
        alert("please the enter number")
    } else {  
        plus = num1 + num2
        alert(plus);
    }
}

sum(num1,num2);
