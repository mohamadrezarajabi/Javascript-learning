let userMin = +prompt("Enter the minute: ");

hour = Math.floor(userMin / 60);
min = userMin % 60;


if (min === 0){
    alert(hour + " h");
}

else{
    alert(hour + " h " + min + " m");
}