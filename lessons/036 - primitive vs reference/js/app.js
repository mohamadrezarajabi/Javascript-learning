
//? تفاوت Primitive و Reference در جاوااسکریپت

// 1️⃣ مقادیر Primitive (عدد، رشته، بولین) → کپی واقعی میشن
let score1 = 50;
let score2 = score1; // یه کپی جدا از مقدار ساخته میشه
score2 = 99;

console.log(score1); // 50  ← تغییر نکرد
console.log(score2); // 99

let lang1 = "Python";
let lang2 = lang1;
lang2 = "JavaScript";

console.log(lang1); // "Python"  ← دست نخورده
console.log(lang2); // "JavaScript"

// 2️⃣ آرایه‌ها → Reference هستن، یعنی همه به یه آدرس حافظه اشاره میکنن
let colors1 = ["red", "blue"];
let colors2 = colors1; // کپی نشد! فقط آدرس کپی شد
let colors3 = colors1;

colors2.push("green"); // روی همون آرایه اصلی تغییر ایجاد میکنه
colors3.shift();       // این هم همینطور

console.log(colors1); // ["blue", "green"]  ← هر سه متغیر یکی هستن
console.log(colors2); // ["blue", "green"]
console.log(colors3); // ["blue", "green"]

// 3️⃣ آبجکت‌ها هم دقیقاً همینطورن → Reference
let product1 = { id: 5, title: "Laptop", price: 1000 };
let product2 = product1;
let product3 = product1;

product2.price = 1200;     // قیمت رو تغییر داد
product3.title = "Mouse";  // اسم رو تغییر داد

console.log("Product1 =", product1);
console.log("Product2 =", product2);
console.log("Product3 =", product3);

/*
 * !نکته مهم: هر سه console.log بالا دقیقاً یک خروجی یکسان میدن
 * چون product1, product2, product3 به یک آبجکت واحد اشاره میکنن
 * تغییر هرکدوم = تغییر همه‌شون
 */