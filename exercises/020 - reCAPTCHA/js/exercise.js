const random = (Math.floor((Math.random() * 100000) + 10000))


let UserCap = +prompt("Please enter the Captcha: " + random);

if (UserCap === random){
    alert("Successful");
} else {
    alert("Unsuccessful");
}