let count = 0;
let sum = 0;
let number;

while (true){
    number = +prompt("please enter number: ");
    if (number < 0 || isNaN(number)) {
        break;
    }

    count++;
    sum += number
}

if (count === 0) {
    alert("No positive numbers entered");
} else{
    alert(sum / count);
}