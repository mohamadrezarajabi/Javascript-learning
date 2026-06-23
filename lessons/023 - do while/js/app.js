// do while --> exactly like while BUT runs the code at least ONCE
// even if the condition is false from the beginning

let i = 0;

do {
    console.log("i = " + i);
    i++;
} while (i > 100); // condition is false --> but still ran once!

// !NOTE: the difference between while and do while:
// while    --> checks condition FIRST --> if false, never runs
// do while --> runs FIRST --> checks condition AFTER

let j = 0;
while (j > 100) {
    console.log("j = " + j); // never runs --> condition is false from start
}