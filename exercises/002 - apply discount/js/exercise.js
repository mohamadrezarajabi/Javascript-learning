let amount = +prompt("Enter the amount:", 1);
let dicount = +prompt("Enter the dicount amount:", 0);

cal_discount = amount - (amount * (dicount / 100));

alert(cal_discount)
