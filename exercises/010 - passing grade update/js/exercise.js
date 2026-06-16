// In this exercise (exercises 009 - passing grade)  has a problem that if we give a string value it returns the condition tru evem though it is not a number.
// In this exercise I ant to slove this bug.

// NOTE: Typeof NaN --> number
// NOTE: NaN === NaN --> is not the same(false)
// NOTE: If we wan to find out if a value is NaN or not ,we use the (isNan) methode.
let score = +prompt("Enter your score: ");

if (isNaN(score)){
    alert("please enter a number")
} else {
    if (score < 20){
        if (score > 15){
            alert("A Grade");
        } else if (score > 12){
            alert("B Grade");
        } else if (score < 12){
            alert("C Grade");
        }
    } else {
        alert("please enter a score between 0-20")
    }
}