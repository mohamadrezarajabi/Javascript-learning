const text = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

let captcha = ""

for (let i = 0; i < 5; i++){
  let random = Math.floor(Math.random() * text.length)
  captcha += text[random]
}

let Review = prompt(`Please enter this captcha: ${captcha}`).trim()

if (Review === captcha){
  alert("correct")
}else{
  alert("wrong")
}