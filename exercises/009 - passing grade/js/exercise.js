let score = +prompt("Enter your score: ");

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