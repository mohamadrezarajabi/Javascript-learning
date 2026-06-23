let num1 = +prompt("Enter a number: ");
let num2 = +prompt("Enter a number: ");

let minnum = Math.min(num1,num2);
let maxnum = Math.max(num1,num2);

if (minnum % 2 == 1) {
    minnum++;
}
while (maxnum >= minnum) {
    console.log(minnum);
    minnum += 2;
    
}