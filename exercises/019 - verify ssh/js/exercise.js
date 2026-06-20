let link = prompt("Enter your link: ").trim();

if (link.slice(0,8) === 'https://' || link.slice(0,7) === 'http://') {
    alert("Successful")    
} else {
    alert("Unsuccessful")
}