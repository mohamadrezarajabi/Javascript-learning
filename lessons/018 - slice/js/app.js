// slice() and substring() --> کات کردن یه قسمتی از متن
// هر دو (start, end) میگیرن --> از کجا شروع کنه تا کجا برسه (end خودش داخل نیست)

const text = "I LOVE JavaScript";

// slice(start, end) --> عدد منفی هم قبول میکنه
console.log(text.slice(7, 17));   // "JavaScript"
console.log(text.slice(-10));     // "JavaScript" <-- از آخر شمارش میکنه

// substring(start, end) --> عدد منفی قبول نمیکنه، صفر حساب میکنه
console.log(text.substring(2, 6)); // "LOVE"