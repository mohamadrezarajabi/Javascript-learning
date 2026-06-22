let number;
avrage = 0;
for (i = 1; 5 >= i; i++) {
    number = +prompt("Enter the number " + i);
    if (isNaN(avrage)){
        alert("please enter the number:");
        break
    }

    avrage += number
}
avrage /= 5

alert("avrage " + avrage);
