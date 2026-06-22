// let number = Math.floor(+prompt("Enter the number: "));

// if (!isNaN(number)){
//     number = String(number).trim();
//     len = number.length;
//     numberLenght = Number(len);
//     alert(numberLenght);
// } else {
//     alert("please enter the number ");
// }

// ----------- or ------------

let number = +prompt("Enter the number: ");
let len = 0;

if (!isNaN(number)) {
    if (number === 0) {
        len = 1;
    } else{
        for(let i = 0; number / 10 !== 0;i++) {
            len++;
            number = Math.floor(number /= 10);
        }
        alert(len);
    }
} else {
    alert("please enter the number ");
}