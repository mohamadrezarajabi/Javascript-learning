let num1 = +prompt("Enter the frist number: ");
let num2 = +prompt("Enter the second number: ");

function forLoop(number1, number2) {
  let pow = 1;
  for (let i = 0; number2 > i; i++) {
    pow *= number1;
  }

  console.log("For: " + pow);
}

forLoop(num1, num2);

function whileLoop(number1, number2) {
  let pow = 1;
  let i = 0;
  while (number2 > i) {
    pow *= number1;
    i++;
  }
  console.log("While: " + pow);
}

whileLoop(num1, num2);

function do_whileLoop(number1, number2) {
  let pow = 1;
  let i = 0;
  do {
    pow *= number1;
    i++;
  } while (number2 > i);

  console.log("do while: " + pow);
}

do_whileLoop(num1, num2);
