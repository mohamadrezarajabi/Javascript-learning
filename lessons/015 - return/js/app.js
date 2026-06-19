// return: It sends a value back from the function to where it was called.
// Without return, the function gives back (undefined).

function square(num) {
    result = num * num;
    return result;  // <-- sends result back to caller
}

let answer = square(5);  // answer = 25
alert(answer);

// !NOTE: return STOPS the function. Code after it won't run.

function checkAge(age) {
    if (age < 18) {
        return "Minor";   // <-- function stops here
    }
    return "Adult";       // <-- only runs if age >= 18
}

alert(checkAge(15));  // "Minor"
alert(checkAge(25));  // "Adult"