let num = +prompt("please the enter a number:", 1);

function evod(number) {
    if (isNaN(number)){
        alert("please the enter number")
    } else {  
        if (number % 2 === 0){
            alert("Even");
        } else{
            alert("Odd");  
        }  
    }
}

evod(num);