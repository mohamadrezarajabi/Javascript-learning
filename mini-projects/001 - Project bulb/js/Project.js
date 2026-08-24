const imgElem = document.querySelector(".img-container img")
const btnElem = document.querySelector("button")

let statusBulb = false

btnElem.addEventListener("click",function (){
    if (statusBulb){
        imgElem.setAttribute("src","/assets/001 - Project bulb/bulboff.gif");
        btnElem.innerHTML = "on bulb"
        statusBulb = false
        imgElem.setAttribute("alt", "off bulb")
    } else{
        imgElem.setAttribute("src","/assets/001 - Project bulb/bulbon.gif");
        btnElem.innerHTML = "off bulb"
        imgElem.setAttribute("alt", "on bulb")
        statusBulb = true
    }
})