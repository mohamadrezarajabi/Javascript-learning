//Logical operators are used to combine boolean expressions.

/* 
let x = 6;
let y = 3;

Oper | Name | Example
--------------------------------------------
 &&  |  AND | (x < 10 && y > 1) is true
--------------------------------------------
 ||  |  OR  | (x === 5 || y === 5) is false
--------------------------------------------
 !  |  NOT  | !(x === y) is true

*/


// Or

let x = 6;
let y = 3;

if (x*y == 15 || x*y >= 18){
    alert("That's right"); // That's right
} else {
    alert("That's wrong");
}

// Inside (or) ||
// true || true --> true
// true || false --> true
// false || true --> true
// false || false --> false


//-------------------------------------------

// And

let z = 6;
let h = 3;

// if (h*z == 15 && h*z >= 18){ 
//     alert("That's right");
// } else {
//     alert("That's wrong"); // Thats's wrong
// }

if (h*z == 15 && h*z <= 18) {
        alert("That's right"); //That's right
} else {
    alert("That's wrong");
}

// Inside (and) &&
// true || true --> true
// true || false --> false
// false || true --> false
// false || false --> false