let Questions = [

  {
    question: "کدام گزینه برای تعریف متغیری که مقدار آن نباید دوباره اختصاص داده شود، مناسب است؟",
    select: ["var", "let", "const", "static"],
    answer: "const"
  },

  {
    question: "خروجی کد زیر چیست؟ typeof []",
    select: ["array", "object", "list", "undefined"],
    answer: "object"
  },

  {
    question: "کدام متد برای اضافه کردن یک عنصر به انتهای آرایه استفاده می‌شود؟",
    select: ["pop()", "shift()", "push()", "add()"],
    answer: "push()"
  },

  {
    question: "خروجی کد زیر چیست؟ 2 + \"3\"",
    select: ["5", "23", "\"5\"", "خطا"],
    answer: "23"
  },

  {
    question: "کدام گزینه برای مقایسه مقدار و نوع داده دو مقدار استفاده می‌شود؟",
    select: ["=", "==", "===", "!="],
    answer: "==="
  },

  {
    question: "خروجی کد زیر چیست؟ اگر x برابر 10 باشد و شرط x > 5 اجرا شود.",
    select: ["A", "B", "10", "خطا"],
    answer: "A"
  },

  {
    question: "کدام گزینه یک تابع معتبر در JavaScript است؟",
    select: [
      "function sayHello() {}",
      "func sayHello() {}",
      "def sayHello() {}",
      "function: sayHello() {}"
    ],
    answer: "function sayHello() {}"
  },

  {
    question: "خروجی کد زیر چیست؟ const numbers = [1, 2, 3]; numbers.length",
    select: ["2", "3", "4", "undefined"],
    answer: "3"
  },

  {
    question: "کدام متد برای حذف آخرین عنصر آرایه استفاده می‌شود؟",
    select: ["remove()", "delete()", "pop()", "shift()"],
    answer: "pop()"
  },

  {
    question: "خروجی کد زیر چیست؟ let age = 18; age >= 18 ? \"Adult\" : \"Child\"",
    select: ["18", "true", "Adult", "Child"],
    answer: "Adult"
  }

]

let preparation = prompt("Are you ready(y/n)? ").trim().toLocaleLowerCase()


let score = 0
if (preparation === "y"){
  Questions.forEach(function (question, index){
    console.log(`${index + 1}. ${question.question}`);
    question.select.forEach(function (option,optionIndex){
      console.log(`${optionIndex + 1}. ${option}`);
    
    })

    let question_answer = +prompt("Your answer: ").trim()

    if (question.select[question_answer -1] === question.answer){
      score++
    }    
  })

  console.log(`Your score is ${score} out of ${Questions.length}`);
  
} else if (preparation === "n") {
  console.log("Ok,Come whenever you,re ready.");
} else{
  console.log("Enter the valid input");
}