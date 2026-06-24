let number = 0;
let total = []
let sum = 0;

while (number  !== -1){
  number = +prompt("enter your number: ");

  if (isNaN(number)){
    continue
  }

  if (number !== -1) {
    total.push(number);
  }
}

for (let i = 0;i < total.length; i++){
  sum += total[i];
}

let average = sum / total.length;

alert("average: " + average);