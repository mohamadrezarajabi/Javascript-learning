let count = 0;
let sum = 0;
let number = 0;

while (number >= 0) {
    number = +prompt("please enter number: ");
    if (isNaN(number)) {
        continue;
    }
    if (number >= 0) {
        count++;
        sum += number;
    }
}

if (count === 0) {
    alert("No positive numbers entered");
} else {
    alert(sum / count);
}