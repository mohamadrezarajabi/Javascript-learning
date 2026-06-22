let number = +prompt("Enter the number: ");

if (!isNaN(number)){
    number = String(number).trim();
    len = number.length;
    numberLenght = Number(len);
    alert(numberLenght);
} else {
    alert("please enter the number ");
}
