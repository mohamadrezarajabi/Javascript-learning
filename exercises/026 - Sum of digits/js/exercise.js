let number = +prompt("Enter the number: ");
let sum= 0;

if (!isNaN(number)) {
    if (number === 0) {
        sum = 0;
    } else{
        for(let i = 0; number / 10 !== 0;i++) {
            digit = number % 10 
            number = Math.floor(number / 10)
            sum += digit
        }
        alert(sum);
    }
} else {
    alert("please enter the number ");
}