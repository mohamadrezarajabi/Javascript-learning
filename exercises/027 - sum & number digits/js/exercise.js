let number = +prompt("Enter the number: ");
let len = 0;
let sum = 0;

if (!isNaN(number)) {

    while (number / 10 !== 0) {
        numberSum = number % 10
        number = Math.floor(number / 10);
        len++;
        sum += numberSum
    }
    alert("sum of digit: " + sum + "\nlen of digit: " + len);
    
} else {
    alert("please enter the number ");
}