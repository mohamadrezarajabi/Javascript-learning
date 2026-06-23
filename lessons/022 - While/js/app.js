// while --> same as for loop but written differently
// use while when you don't know exactly how many times it should run

let i = 0;

while (i < 5) {
    console.log("i = " + i); // prints 0, 1, 2, 3, 4
    i++; // !NOTE: don't forget this --> without it, loop runs forever (infinite loop)
}

// for   --> you know the exact count  --> for(let i = 0; i < 5; i++)
// while --> you check a condition     --> while(i < 5)