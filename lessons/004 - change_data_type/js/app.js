// To string

let age = 25;  // data-type --> number
console.log(age);
console.log(typeof age);

let stringAge = String(age); // date-type age = 25 (number) ---> data-type age = '25' (String)
console.log(stringAge);
console.log(typeof stringAge);

let bool = true;
console.log(bool);
console.log(typeof bool); // boolean
console.log(typeof String(bool)); // string


// To number

let ageS = "25"; 
console.log(ageS); // "25"
console.log(typeof ageS); // string

let castAge = Number(ageS); //  data-type age = '25' (String) ---> date-type age = 25 (number)

console.log(castAge); // 25
console.log(typeof castAge); // number

// or 

let ageS2 = "25"; 
console.log(ageS2); // "25"
console.log(typeof ageS2); // string

let castAge2 = +ageS2; //  data-type age = '25' (String) ---> date-type age = 25 (number) || symbol (+) == metode Number

console.log(castAge2); // 25
console.log(typeof castAge2); // number


// NOTE: Words and letters cannot have a Number data type. //

let sit = "mho";
console.log(+sit); // NaN (not a number)


// To Boolean

let number = 1;
console.log(number); // 1
console.log(typeof number); // number

let boolNumber = Boolean(number); // data type Number --> Boolean

console.log(boolNumber); // true
console.log(typeof boolNumber); // boolean


// NOTE: All number are true except 0 which is false //