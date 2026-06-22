let amount;
let total = 0;
for (i = 1; 5 >= i; i++) {
    amount = +prompt("Enter the amount " + i);
    if (isNaN(amount)){
        alert("please enter the number:");
        break
    }
    total += amount
}

alert(total + " $")
