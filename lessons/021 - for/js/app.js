// Loop --> runs a block of code multiple times
// for loop takes 3 parameters:
// for(start; condition; step)
//      start     --> where to begin      i = 10
//      condition --> when to stop        i < 25  (runs while true, stops when false)
//      step      --> how to move forward i++     (adds 1 each time)

for (let i = 10; i < 25; i++) {
    console.log("i = ", i); // prints 10, 11, 12 ... 24
}

// !NOTE: the loop checks the condition BEFORE each run
//        i = 10 --> true  --> runs
//        i = 24 --> true  --> runs
//        i = 25 --> false --> stops

// console.log(i); // ❌ ReferenceError --> i only exists inside the loop (block scope)