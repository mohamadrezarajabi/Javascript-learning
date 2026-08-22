let min = +prompt("Please enter minutes:").trim()
let sec = +prompt("Please enter second")


if (isNaN(min) || isNaN(sec)){
  alert("please enter the valid value")

} if(min > 60 || sec > 60 || min < 0 || sec < 0){
  alert("please enter a valid numberic value")
} else{

  let timer = setInterval(function (){
    console.log(`min: ${min} sec: ${sec}`);
    
    if (sec === 0 && min === 0){
      alert("It's time")
      clearInterval(timer)
    }

    if (sec === 0){
      min--;
      sec = 59
    }else {
      sec--
    }
  },1000)
}
