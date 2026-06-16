// One problem whit this (passing grade update) exercise was rhat we used (if) and (else if) a lot. Our exercise became very busy and this is not right so we will use (switch-case).


let score = +prompt("Enter your score: ");

if (isNaN(score)){

    alert("please enter a number")

} else {
    
    if (score <= 20){

        // Because (case) conditions with >, <, <=, >=, return true or false we need to use switch(true) to ensure that use conditions are checked correctly.
        switch (true) {
            case (score >= 18): { //  <-- if (score >= 18)
                alert("Grade A")
                break
            }
            case (score >= 15): {
                alert("Grade B")
                break
            }
            case (score >= 12): {
                alert("Grade C")
                break            
            }
            case (score >= 10): {
                alert("Grade D")
                break            
            }
            case (score >= 5): {
                alert("Grade F")
                break            
            }
            
            default: {
                alert("Grade F+")
            }
        // NOTE: And inside each case we use break to exit the switch if that condition is true.
        }

    } else {
        alert("please enter a score between 0-20")
    }

}
