let num1 = +prompt("Enter the number first").trim()
let mark = prompt("Enter your mark").trim()
let num2 = +prompt("Enter the number second").trim()

if (isNaN(num1) || isNaN(num2)){
  alert("Enter the vaild number.")
}else {
  if (mark === "+"){
    alert(num1 + num2)
  }else if (mark === "-"){
    alert(num1 - num2)
  }else if (mark === "/"){
    alert(num1 / num2)
  }else if (mark === "*"){
    alert(num1 * num2)
  }else if (mark === "**"){
    alert(num1 ** num2)
  }else if (mark === "//"){
    alert(Math.floor(num1 / num2))
  }else if (mark === "%"){
   alert(num1 % num2) 
  }else{
    alert("Enter the vaild mark.")
  }
}

