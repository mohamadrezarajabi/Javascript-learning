let num = +prompt("please the enter frist number:", 1);
let num2 = +prompt("please the enter second number:", 1);
let num3 = +prompt("please the enter thrid number:", 1);

function avrege(number1,number2,number3){
    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
        alert("please the enter number")
    } else {  
        avreges = Math.floor((number1 + number2 + number3) / 3)
        alert("Avrege: " + avreges);
    }
}


avrege(num,num2,num3);