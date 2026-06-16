let num = 15;
let num2 = 8;

switch (num * num2){
    case 10: {
        alert("Equal 10");
        break;
    }
    case 20: {
        alert("Equal 20");
        break;
    }
    case 30: {
        alert("Equal 30");
        break;
    }
    case 40:{        
        alert("Equal 40");
        break;
    }
    // NOTE: if we want to use (else) in switch-case we use the (default).
    default: {
        alert("Number is not found");
        break;
    }
    // NOTE: And inside each case we use break to exit the switch if that condition is true.

}