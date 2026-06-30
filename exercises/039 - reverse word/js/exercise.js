let word = prompt("enter a word: ").trim().toLocaleLowerCase();
// let reverseWord = "";

// for (let i = word.length -1 ; i >= 0 ; i--) {
//   reverseWord += word[i]
// }
// if (word === reverseWord){
//   console.log(true);
// } else{
//   console.log(false);
// }

// !or

let reverse = word.split("");
reverse.reverse();
reverse = reverse.join("");
if (word === reverse) {
  console.log(true);
} else {
  console.log(false);
}
